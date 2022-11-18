import 'dotenv/config'

import destaque from './controller/destaque.js';
import departamento from './controller/departamento.js'
import produto from './controller/produto.js'
import usuario from './controller/usuariocontroler.js'

import pedidooo from './controller/pedidooo.js'

import express from "express";
import cors from "cors";

const server = express();

server.use('/storage/produto', express.static('storage/produto') );
server.use(cors());
server.use(express.json());


server.use(usuario);
server.use(destaque);
server.use(departamento);
server.use(produto);
server.use(pedidooo);

 


const PORT = process.env.PORT;
server.listen(PORT, () => console.log("API subiu na porta " + PORT));