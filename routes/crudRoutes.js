const express = require("express");
const CrudController = require("../controllers/crudController");

const generateCrudRoutes = (model) => {
  const router = express.Router();
  const controller = new CrudController(model);

  router.get("/", controller.getAll);
  router.get("/:id", controller.getOne);
  router.post("/", controller.create);
  router.put("/:id", controller.update);
  router.delete("/:id", controller.delete);

  return router;
};

module.exports = generateCrudRoutes;
