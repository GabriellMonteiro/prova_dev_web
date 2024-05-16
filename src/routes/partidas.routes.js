const Router = require("express");

const PartidaController = require("../controllers/PartidaController")

const partidasRoutes = Router()

const partidasController = new PartidaController()

partidasRoutes.post("/create-partida", partidasController.create);

partidasRoutes.put("/edit-partida/:id", partidasController.update);

partidasRoutes.delete("/remove-partida/:id", partidasController.delete);

partidasRoutes.get("/find-partida/:id",partidasController.findById);

module.exports = partidasRoutes
