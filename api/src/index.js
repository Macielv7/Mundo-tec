import 'dotenv/config'

import AdmProduto from "./controller/admin/ProdutoController.js"
import Departamento from "./controller/admin/DepartamentoController.js"

import Produto from "./controller/ProdutoController.js"
import Login from "./controller/LoginController.js"


import express from "express";
import cors from "cors";

const server = express();

server.use(cors());
server.use(express.json());

server.use('/storage/produto', express.static('storage/produto'));


server.use(AdmProduto);
server.use(Departamento);

server.use(Produto);
server.use(Login);


const PORT = process.env.PORT;
server.listen(PORT, () => console.log("API subiu na porta " + PORT));