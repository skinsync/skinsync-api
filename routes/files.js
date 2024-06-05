const express = require("express");
const router = express.Router();
const fileController = require("../controllers/fileController");
const multer = require("multer");
const verifyToken = require("../middlewares/verify-token");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/", upload.single("image"), verifyToken, fileController.upload);

module.exports = router;
