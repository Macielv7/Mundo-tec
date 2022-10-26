import { API_URL } from './config.js';

import axios from 'axios';

const api = axios.create({
    baseURL: API_URL
})



export async function cadastroUsuario(nome, cpf,  genero, email, telefone, senha, confirmar) {
    const r = await api.post('/cadastrousuario',{
        nome:nome,
        cpf:cpf,
        genero:genero,
        email: email,
        telefone: telefone,
        senha: senha,
        confirmar: confirmar
    })
    return r.data;
}

export async function loginUsuario(email, senha){
    const a = await api.post('/usuario/login',{
        email: email,
        senha: senha
    });
    return a.data;
}

export async function listarUsuario(){
    const resposta = await api.get('/usuario');
    return resposta.data;
  }


export async function logar(email, senha) {
    const r = await api.post('/api/login', { email, senha });
    return r.data;
}



//endereco




export async function salvar(idUsuario, ds_cep, nm_numero ,nm_estado  , ds_casa ,nm_cidade  ,ds_complemento ,nm_bairro) {
    const r = await api.post('/api/usuario/' + idUsuario + '/endereco', {  ds_cep, nm_numero ,nm_estado  , ds_casa ,nm_cidade  ,ds_complemento ,nm_bairro  });
    return r.data;
}


export async function listar(idUsuario) {
    const r = await api.get('/api/usuario/' + idUsuario + '/endereco');
    return r.data;
}