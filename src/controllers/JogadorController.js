const prisma = require("../utils");

class JogadorController {
    
    async create(request, response) {
        try {
            const requestBody = request.body;

            const result = await prisma.jogadores.create({
                data: {
                    nome: requestBody.nome,
                    idade: requestBody.idade,
                    posicao: requestBody.posicao,
                    nacionalidade: requestBody.nacionalidade,
                    times: requestBody.times
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

            const result = await prisma.jogadores.update({
                where: {
                    id: param.id
                },
                data: {
                    nome: requestBody.nome,
                    idade: requestBody.idade,
                    posicao: requestBody.posicao,
                    nacionalidade: requestBody.nacionalidade,
                    times: requestBody.times
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

            const result = await prisma.jogadores.delete({
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

            const jogador = await prisma.jogadores.findUnique({
                where: {
                    id: param.id,
                },
                select: {
                    nome: true,
                    idade: true,
                    posicao: true,
                    nacionalidade: true,
                    times: true
                },
            })

            response.json(jogador);
        } catch (e) {
            return response.status(409).send();
        }
    }
}

module.exports = JogadorController;
