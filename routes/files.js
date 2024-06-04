const express = require("express");
const router = express.Router();
const fileController = require("../controllers/fileController");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/", upload.single("image"), fileController.upload);

module.exports = router;
