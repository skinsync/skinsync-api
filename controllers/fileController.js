const { Storage } = require("@google-cloud/storage");
const path = require("path");
const dotenv = require("dotenv").config().parsed;

const gc = new Storage();
const bucket = gc.bucket(process.env.GCLOUD_STORAGE_BUCKET);

exports.upload = async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  const { folder } = req.query;
  
  if (folder) {
    var folderPath = folder + "/";
  }
  else {
    var folderPath = "";
  }

  const blob = bucket.file(
    folderPath + Date.now() + "_" + req.file.originalname
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
