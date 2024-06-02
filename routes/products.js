const generateCrudRoutes = require("./crudRoutes");

const { Product } = require("../models/");

const validationSchema = require("../validations/productValidationSchema");

const router = generateCrudRoutes(Product, validationSchema);

module.exports = router;
