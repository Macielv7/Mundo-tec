import multer from 'multer'
import { Router } from 'express';

import { alterarProduto, buscarProdutoDestaque, buscarProdutoImagens, buscarProdutoPorId, buscarProdutos, removerProduto, removerProdutoDestaque, removerProdutoImagens, removerProdutoImagensDiferentesDe, salvarProduto, salvarProdutoDestaque, salvarProdutoImagem } from '../repository/produto.js';
import { buscarDestaquePorId } from '../repository/destaque.js';



const server = Router();
const upload = multer({ dest: 'storage/produto' })



server.post('/produto', async (req, resp) => {
    try {
        const produto = req.body;
        const idProduto = await salvarProduto(produto);

        resp.send({
             id : idProduto
        });

    }
    catch (err) {
        return resp.status(400).send({
            erro: err.message
        })
    }
})




server.put('/produto/:id/imagem', upload.array('imagens'), async (req, resp) => {
    try {
        const id = req.params.id;
        const imagens = req.files;
        
        for (const imagem of imagens) {
            await salvarProdutoImagem(id, imagem.path);
        }

        resp.status(204).send();
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



server.get('/admin/produto', async (req, resp) => {
    try {
        const r = await buscarProdutos();
        resp.send(r);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.delete('/admin/produto/:id', async (req, resp) => {
    try {
        const id = req.params.id;

        await removerProdutoDestaque(id);
        await removerProdutoImagens(id);
        await removerProduto(id);

        resp.status(204).send();
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.get('/admin/produto/:id', async (req, resp) => {
    try {
        const id = req.params.id;

        const produto = await buscarProdutoPorId(id);
        const Destaques = await buscarProdutoDestaque(id);
        const imagens = await buscarProdutoImagens(id);

        resp.send({
            info: produto,
            Destaques: Destaques,
            imagens: imagens
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.put('/admin/produto/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const produto = req.body;
        
        await removerProdutoDestaque(id);
        

        await alterarProduto(id, produto);

        for (const idCateg of produto.Destaques) {
            const cat = await buscarDestaquePorId(idCateg);
            
            if (cat != undefined)
                await salvarProdutoDestaque(id, idCateg);
        }
        
        resp.status(204).send();

    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;