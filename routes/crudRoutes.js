const express = require("express");
const CrudController = require("../controllers/crudController");
const verifyToken = require("../middlewares/verify-token");
const admin = require("../middlewares/admin");
const validate = require("../middlewares/validate");
const { User, Article, Product } = require("../models/");

const generateCrudRoutes = (model, validationSchema = {}) => {
  const router = express.Router();
  const controller = new CrudController(model);

  const userReadOnlyModels = [Article, Product];
  const isUserReadOnly = userReadOnlyModels.includes(model);

  if (isUserReadOnly) {
    router.get("/", verifyToken, controller.getAll);
    router.get("/:id", verifyToken, controller.getOne);
  } else {
    router.get("/", [verifyToken, admin], controller.getAll);
    router.get("/:id", [verifyToken, admin], controller.getOne);
  }

  router.post("/", [verifyToken, admin, validate(validationSchema)], controller.create);
  router.put("/:id", [verifyToken, admin, validate(validationSchema)], controller.update);
  router.delete("/:id", [verifyToken, admin], controller.delete);

  return router;
};

module.exports = generateCrudRoutes;
