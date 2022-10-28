import { Router } from "express";
import {login} from "../repository/usuarioRepositorio.js"
import { cadastrorUsuario, imagemUsuario, listarUsuario} from "../repository/usuarioRepositorio.js"
import multer from 'multer';
import { listar, salvar } from "../repository/usuarioRepositorio.js";


const server = Router();
const upload = multer({ dest: 'storage/capaUsuario'})


server.post('/cadastrousuario', async (req,resp) => {
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
        const { email, senha } = req.body;

        const r = await login(email, senha);
        if (!r) {
            throw new Error('Credenciais inválidas');
        }

        resp.send({
            id: r.id,
            nome: r.nome
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})





server.put('/cadastroUsuario/:id/capa', upload.single('capa') ,async (req, resp) => {
    try{
        if(!req.file)
        throw new Error('Escolhar a imagem do usuario.');
        const {id} = req.params;
        const imagem = req.file.path;

        const resposta = await imagemUsuario(imagem, id);
        if(resposta != 1)
            throw new Error('A imagem não pode ser salva.');

        resp.status(204).send();
    }
    catch(err){
        resp.status(401).send({
            erro: err.message
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