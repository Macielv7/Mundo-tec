import { usuario } from "../repository/usuarioRepositorio.js";
import { Router } from 'express';

const server = Router();

server.post('/cadastro/usuario', async (req, resp)=> {
    try{

        const usuario = req.body;
        const linhas = await usuario(usuario)
        resp.send(usuario)

    }catch(err){
        return resp.status(400).send({
            erro:"Ops, algo não está funcionando corretamente!!"
        })
    }
})

export default server;