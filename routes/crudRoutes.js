const express = require("express");
const CrudController = require("../controllers/crudController");
const verifyToken = require("../middlewares/verify-token");
const admin = require("../middlewares/admin");

const generateCrudRoutes = (model) => {
  const router = express.Router();
  const controller = new CrudController(model);

  router.get("/", verifyToken, admin, controller.getAll);
  router.get("/:id", verifyToken, admin, controller.getOne);
  router.post("/", verifyToken, admin, controller.create);
  router.put("/:id", verifyToken, admin, controller.update);
  router.delete("/:id", verifyToken, admin, controller.delete);

  return router;
};

module.exports = generateCrudRoutes;
