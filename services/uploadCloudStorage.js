const { Storage } = require("@google-cloud/storage");

const gc = new Storage();
const bucket = gc.bucket(process.env.GCLOUD_STORAGE_BUCKET);

async function uploadToCloudStorage(file, folderPath = "") {
  const blob = bucket.file(
    folderPath + Date.now() + "_" + file.originalname
  );
  const blobStream = blob.createWriteStream({
    resumable: false,
    gzip: true,
  });

  blobStream.on("error", (err) => {
    return err.message;
  });

  blobStream.on("finish", () => {
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
    return publicUrl;
  });

  blobStream.end(file.buffer);
}

module.exports = uploadToCloudStorage;