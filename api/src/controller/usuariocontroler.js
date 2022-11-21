import { Router } from "express";

import { cadastrorUsuario, listarUsuario ,buscarUsuarioPorId,login} from "../repository/usuarioRepositorio.js"
import multer from 'multer';
import { listar, salvar } from "../repository/usuarioRepositorio.js";


const server = Router();
const upload = multer({ dest: 'storage/capaUsuario'})


server.post('/cadastroooo', async (req,resp) => {
    try {
      const usuario = req.body;
      const x = await cadastrorUsuario(usuario);
      
      resp.send(x);
 
    }

    catch (err) {
 
     resp.status(401).send({
         erro: err.message
     })
        
    }
})




server.post('/api/login', async (req, resp) => {
    try {
        const {email, senha} = req.body;
        
        const resposta = await login (email, senha)
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



server.get('/usuario', async (req, resp) => {
    try {
        const resposta = await listarUsuario();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/usuario/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);
        
        const resposta = await buscarUsuarioPorId(id);

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




//ENDEREÇO  


server.post('/api/usuario/:id/endereco', async (req, resp) => {
    try {
        const id = req.params.id;
        const endereco = req.body;

        const r = await salvar(id, endereco);
        resp.status(204).send();
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.get('/api/usuario/:id/endereco', async (req, resp) => {
    try {
        const id = req.params.id;
        
        const r = await listar(id);
        
        resp.send(r);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

 
 export default server;