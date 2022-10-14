import 'dotenv/config'

import destaque from './controller/destaque.js';
import departamento from './controller/departamento.js'
import produto from './controller/produto.js'
import usuario from './controller/usuariocontroler.js'

import express from "express";
import cors from "cors";

const server = express();

server.use('/storage/capaProduto', express.static('storage/capaProduto') );
server.use(cors());
server.use(express.json());


server.use(usuario)
server.use(destaque);
server.use(departamento);
server.use(produto);
 


const PORT = process.env.PORT;
server.listen(PORT, () => console.log("API subiu na porta " + PORT));