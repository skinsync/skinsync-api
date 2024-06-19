const uploadToCloudStorage = require("../services/uploadCloudStorage");

exports.upload = async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  const { folder } = req.query;
  const folderPath = folder ? `${folder}/` : "";

  try {
    const publicUrl = await uploadToCloudStorage(req.file, folderPath);
    res.status(200).send({
      message: "File uploaded successfully",
      url: publicUrl,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
