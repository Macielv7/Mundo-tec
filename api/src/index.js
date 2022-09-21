import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import usuariocontroler from './controller/usuariocontroler.js'
import categoriaController from './controller/categoriaController.js'


const server = express();
server.use(cors());
server.use(express.json());


server.use(usuariocontroler);
server.use(categoriaController)


server.listen(process.env.PORT, () => console.log(`API NA PORTA ${process.env.PORT}`));