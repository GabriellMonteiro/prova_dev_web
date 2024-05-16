const prisma = require("../utils");

class PartidaController {
    
    async create(request, response) {
        try {
            const requestBody = request.body;

            const result = await prisma.partidas.create({
                data: {
                    data: requestBody.data,
                    local: requestBody.local,
                    placar: requestBody.placar,
                    timeCasa: requestBody.timeCasa,
                    timeVisita: requestBody.timeVisita
                }
            })

            response.json(result);
        } catch (e) {
            return response.status(409).send();
        }
    }

    async update(request, response) {
        try {
            const requestBody = request.body;
            const param = request.params;

            const result = await prisma.partidas.update({
                where: {
                    id: param.id
                },
                data: {
                    data: requestBody.data,
                    local: requestBody.local,
                    placar: requestBody.placar,
                    timeCasa: requestBody.timeCasa,
                    timeVisita: requestBody.timeVisita
                }
            })

            response.json(result);
        } catch (e) {
            return response.status(409).send();
        }
    }

    async delete(request, response) {
        try {
            const param = request.params;

            const result = await prisma.partidas.delete({
                where: {
                    id: param.id
                }
            })

            return response.status(200);
        } catch (e) {
            return response.status(409).send();
        }
    }

    async findById(request, response) {
        try {
            const param = request.params;

            const partida = await prisma.partidas.findUnique({
                where: {
                    id: param.id,
                },
                select: {
                    data: true,
                    local: true,
                    placar: true,
                    timeCasa: true,
                    timeVisita: true
                },
            })

            response.json(partida);
        } catch (e) {
            return response.status(409).send();
        }
    }
}

module.exports = PartidaController;
