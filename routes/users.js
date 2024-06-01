const generateCrudRoutes = require("./crudRoutes");

const { User } = require("../models/");

const userValidationSchema = require("../validations/userValidationSchema");

const usersRouter = generateCrudRoutes(User, userValidationSchema);

module.exports = usersRouter;
