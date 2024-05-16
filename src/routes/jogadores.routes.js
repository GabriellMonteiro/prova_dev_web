const Router = require("express");

const JogadorController = require("../controllers/JogadorController")

const jogadorRoutes = Router()

const mealsController = new JogadorController()

jogadorRoutes.post("/create-meal", mealsController.create);

jogadorRoutes.put("/edit-meal/:id", mealsController.update);

jogadorRoutes.delete("/remove-meal/:id", mealsController.delete);

jogadorRoutes.get("/find-meal/:id",mealsController.findById);

module.exports = jogadorRoutes
