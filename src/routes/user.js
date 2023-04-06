const { Router } = require("express");
const userController = require("../controllers/userController");

const routes = new Router();

// Add routes
routes.post("/users", userController.create);
routes.get("/users", userController.list);
routes.get("/users/:id", userController.show);
routes.put("/users/:id", userController.update);
routes.delete("/users/:id", userController.destroy);

module.exports = routes;
