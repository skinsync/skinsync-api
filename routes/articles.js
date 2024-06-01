const generateCrudRoutes = require("./crudRoutes");

const { Article } = require("../models/");

const userValidationSchema = require("../validations/articleValidationSchema");

const articlesRouter = generateCrudRoutes(Article, userValidationSchema);

module.exports = articlesRouter;
