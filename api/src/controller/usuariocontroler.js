import { login } from '../repository/usuarioRepositorio.js'

import { Router } from 'express';
const server = Router();


server.post('/usuario/login', async (req, resp) => {
    try {
        const { gmail, senha } = req.body;
        
        const resposta = await login(gmail, senha);
        if (!resposta) {
            throw new Error('Credenciais inválidas');
        }

        resp.send(resposta)

    } catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

export default server;