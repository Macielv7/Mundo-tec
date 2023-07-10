import { listarDepartamentos } from "../../repository/DepartamentoRepository.js";


import { Router } from "express";
const server = Router();


server.get('/api/departamento', async (req, resp) => {
    try {
        const linhas = await listarDepartamentos();
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;