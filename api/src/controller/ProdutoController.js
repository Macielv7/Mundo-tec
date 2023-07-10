import multer from 'multer'
import { Router } from 'express';

import {  buscarProdutoImagens,  buscarProdutoPorId, listarProdutosInicio } from '../repository/ProdutoRepository.js';




const server = Router();



server.get('/api/produto', async (req, resp) => {
    try {
        const r = await listarProdutosInicio();
        resp.send(r);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



server.get('/api/produto/:id', async (req, resp) => {
    try {
        const id = req.params.id;

        const produto = await buscarProdutoPorId(id);
        const imagens = await buscarProdutoImagens(id);

        resp.send({
            info: produto,
            imagens: imagens
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;