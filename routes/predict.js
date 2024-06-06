const express = require("express");
const router = express.Router();
const inferenceController = require("../controllers/inferenceController");
const verifyToken = require("../middlewares/verify-token");

router.get("/", verifyToken, inferenceController.predictSkintype);

module.exports = router;
