const express = require("express");
const router = express.Router();
const savedProductController = require("../controllers/savedProductController");
const verifyToken = require("../middlewares/verify-token");

router.get("/", verifyToken, savedProductController.getListSavedProducts);
router.post("/:id", verifyToken, savedProductController.saveProduct);
router.delete("/:id", verifyToken, savedProductController.deleteSavedProduct);

module.exports = router;
