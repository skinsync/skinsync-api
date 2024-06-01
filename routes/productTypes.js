const generateCrudRoutes = require("./crudRoutes");

const { ProductType } = require("../models/");

const validationSchema = require("../validations/productTypeValidationSchema");

const router = generateCrudRoutes(ProductType, validationSchema);

module.exports = router;
