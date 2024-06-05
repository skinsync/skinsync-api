const express = require("express");
const router = express.Router();
const utilController = require("../controllers/utilController");
const verifyToken = require("../middlewares/verify-token");

router.get("/get-brands", verifyToken, utilController.getListBrand);
router.get("/get-product-types", verifyToken, utilController.getListProductType);

module.exports = router;
