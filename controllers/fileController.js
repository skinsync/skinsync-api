const multer = require("multer");
const { Storage } = require("@google-cloud/storage");
const path = require("path");
const dotenv = require("dotenv").config().parsed;

const gc = new Storage();
const bucket = gc.bucket(process.env.GCLOUD_STORAGE_BUCKET);
const folderPath = "article_images/";

exports.upload = async (req, res) => {
  console.log(req.file);
  
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  const blob = bucket.file(
    Date.now() + path.extname(req.file.originalname)
  );
  const blobStream = blob.createWriteStream({
    resumable: false,
    gzip: true,
  });

  blobStream.on("error", (err) => {
    res.status(500).json({ message: err.message });
  });

  blobStream.on("finish", () => {
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
    res.status(200).send({ url: publicUrl });
  });

  blobStream.end(req.file.buffer);
};
