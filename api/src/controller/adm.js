import { loginAdmmm } from '../repository/adm.js'

import { Router  } from "express"
const server = Router();

server.post('/adm/loginnn', async (req, resp) => {
    try {
        const {email, senha} = req.body;
        
        const resposta = await loginAdmmm (email, senha)
        if(!resposta){
            throw new Error('Credenciais inválidas')
        }

        resp.status(200).send(
        resposta
        )
        
    } 
    catch (err) {
        resp.status(401).send({
            Erro: err.message
        })
    }
})

export default server;