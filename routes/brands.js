const generateCrudRoutes = require("./crudRoutes");

const { Brand } = require("../models/");

const validationSchema = require("../validations/brandValidationSchema");

const router = generateCrudRoutes(Brand, validationSchema);

module.exports = router;
