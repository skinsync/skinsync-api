const generateCrudRoutes = require("./crudRoutes");

const { Article } = require("../models/");

const validationSchema = require("../validations/articleValidationSchema");

const router = generateCrudRoutes(Article, validationSchema);

module.exports = router;
