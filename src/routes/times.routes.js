const Router = require("express");

const TimesController = require("../controllers/TimesController")

const timesRoutes = Router()

const timesController = new TimesController()

timesRoutes.post("/create-time", timesController.create);

timesRoutes.put("/edit-time/:id", timesController.update);

timesRoutes.delete("/remove-time/:id", timesController.delete);

timesRoutes.get("/find-time/:id",timesController.findById);

module.exports = timesRoutes
