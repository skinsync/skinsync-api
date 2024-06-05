const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");
const verifyToken = require("../middlewares/verify-token");
const validate = require("../middlewares/validate");
const validationSchema = require("../validations/userValidationSchema");

router.get("/", verifyToken, profileController.getProfile);
router.put("/edit", [verifyToken, validate(validationSchema)], profileController.updateProfile);

module.exports = router;
