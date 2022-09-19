import { Router } from "express";
import { Login  } from "../repository/usuarioRepositorio"

const server = Router()

server.post('/usuario' , async (req,resp) => {
    try{
        const {gmail, senha} = req.body;

        const resposta = await Login(gmail,senha)
        if(!resposta){
            throw new Error('Credenciais Inválidas')
        }
        resp.send(resposta)

    }
    catch(err){
        resp.status(401).send({
            erro:err.message
        })
    }
})

export default server;