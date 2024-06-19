const express = require("express");
const router = express.Router();
const inferenceController = require("../controllers/inferenceController");
const multer = require("multer");
const verifyToken = require("../middlewares/verify-token");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/", upload.single("image"), verifyToken, inferenceController.predictSkintype);
router.post("/recommendation", verifyToken, inferenceController.getRecommendation);
router.post("/recommendation-raw", verifyToken, inferenceController.getRecommendationProducts);

module.exports = router;
