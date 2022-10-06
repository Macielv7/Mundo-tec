import { Router } from 'express';
import { loginAdm } from '../repository/adm.js';

const server = Router();

server.post('/admin/login', async (req, resp) => {
    try{
        const {user, senha} = req.body;
        const resposta = await loginAdm(user, senha);
        if(!resposta){
            throw new Error('Credenciais inválidas!');
        }

        resp.send(resposta);
    } catch (err){
        resp.status(401).send({
            erro: err.message
        });
    }
})

export default server;