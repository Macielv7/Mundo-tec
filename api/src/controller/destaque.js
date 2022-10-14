import { listarDestaque } from "../repository/destaque.js";


import { Router } from "express";
const server = Router();



server.get('/api/destaque', async (req, resp) => {
    try {
        const linhas = await listarDestaque();
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;