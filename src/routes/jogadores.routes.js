const Router = require("express");

const JogadorController = require("../controllers/JogadorController")

const jogadorRoutes = Router()

const jogadorController = new JogadorController()

jogadorRoutes.post("/create-jogador", jogadorController.create);

jogadorRoutes.put("/edit-jogador/:id", jogadorController.update);

jogadorRoutes.delete("/remove-jogador/:id", jogadorController.delete);

jogadorRoutes.get("/find-jogador/:id",jogadorController.findById);

module.exports = jogadorRoutes
