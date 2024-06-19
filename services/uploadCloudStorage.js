const { Storage } = require("@google-cloud/storage");

const gc = new Storage();
const bucket = gc.bucket(process.env.GCLOUD_STORAGE_BUCKET);

async function uploadToCloudStorage(file, folderPath = "") {
  return new Promise((resolve, reject) => {
    const blob = bucket.file(folderPath + Date.now() + "_" + file.originalname);
    const blobStream = blob.createWriteStream({
      resumable: false,
      gzip: true,
    });

    blobStream.on("error", (err) => {
      reject(err.message);
    });

    blobStream.on("finish", () => {
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
      resolve(publicUrl);
    });

    blobStream.end(file.buffer);
  });
}

module.exports = uploadToCloudStorage;