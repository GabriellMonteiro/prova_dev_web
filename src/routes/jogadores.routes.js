const Router = require("express");

const JogadorController = require("../controllers/JogadorController")

const jogadorRoutes = Router()

const mealsController = new JogadorController()

jogadorRoutes.post("/create-jogador", mealsController.create);

jogadorRoutes.put("/edit-jogador/:id", mealsController.update);

jogadorRoutes.delete("/remove-jogador/:id", mealsController.delete);

jogadorRoutes.get("/find-jogador/:id",mealsController.findById);

module.exports = jogadorRoutes
