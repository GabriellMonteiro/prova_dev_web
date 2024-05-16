const {Router} = require("express");
const timesRoutes = require('./times.routes')
const jogadorRoutes = require('./jogadores.routes');
const partidaRoutes = require('./partidas.routes');

const routes = Router();

 routes.use("/api/v1/times", timesRoutes);

 routes.use("/api/v1/jogadores", jogadorRoutes);

 routes.use("/api/v1/partidas", partidaRoutes);

module.exports = routes;