
import {  alterarImagem, buscarPorId, buscarPorNome,cadastrarProduto , listarTodosProdutos, removerProduto } from '../repository/produto.js'

import multer from 'multer'
import { Router } from 'express'

const server = Router();
const upload = multer({ dest: 'storage/capaProduto' })

server.get('/produto', async (req, resp) => {
    try {
        const resposta = await listarTodosProdutos();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.post('/produto', async (req, resp) => {
    try {
        const novoProduto = req.body;
        const produtoInserido = await cadastrarProduto(novoProduto);
        resp.send(produtoInserido);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.put('/produto/:id/capa', upload.single('capa'), async (req, resp) => {
    try {
        const { id } = req.params;
        const imagem = req.file.path;

        const resposta = await alterarImagem(imagem, id);
        if (resposta != 1)
            throw new Error('A imagem não pode ser salva.');

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})









server.get('/produto/busca', async (req, resp) => {
    try {
        const { nome } = req.query;
        
        const resposta = await buscarPorNome(nome);

        if (resposta.length == 0)
            resp.status(404).send([])
        else
            resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})






server.get('/produto/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);
        
        const resposta = await buscarPorId(id);

        if (!resposta)
            resp.status(404).send([])
        else
            resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



server.delete('/produto/:id', async (req, resp) => {
    try {
        const { id } = req.params;

        const resposta = await removerProduto(id);
        if (resposta != 1)
            throw new Error('produto não pode ser removido.');

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})








export default server;