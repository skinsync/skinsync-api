const express = require("express");
const CrudController = require("../controllers/crudController");
const verifyToken = require("../middlewares/verify-token");
const admin = require("../middlewares/admin");
const { User, Article } = require("../models/");

const generateCrudRoutes = (model) => {
  const router = express.Router();
  const controller = new CrudController(model);

  const userReadOnlyModels = [Article];
  const isUserReadOnly = userReadOnlyModels.includes(model);

  if (isUserReadOnly) {
    router.get("/", verifyToken, controller.getAll);
    router.get("/:id", verifyToken, controller.getOne);
    router.post("/", verifyToken, admin, controller.create);
    router.put("/:id", verifyToken, admin, controller.update);
    router.delete("/:id", verifyToken, admin, controller.delete);
  } else {
    router.get("/", verifyToken, admin, controller.getAll);
    router.get("/:id", verifyToken, admin, controller.getOne);
    router.post("/", verifyToken, admin, controller.create);
    router.put("/:id", verifyToken, admin, controller.update);
    router.delete("/:id", verifyToken, admin, controller.delete);
  }

  return router;
};

module.exports = generateCrudRoutes;
