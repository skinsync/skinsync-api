const generateCrudRoutes = require("./crudRoutes");

const { User } = require("../models/");

const validationSchema = require("../validations/userValidationSchema");

const router = generateCrudRoutes(User, validationSchema);

module.exports = router;
