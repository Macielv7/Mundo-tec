import { API_URL } from './config.js';

import axios from 'axios';

const api = axios.create({
    baseURL: API_URL
})



export async function cadastrorUsuario(nome, cpf,  genero, email, telefone, senha, confirmar) {
    const r = await api.post('/cadastroooo',{
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

export async function loooginn(email, senha){
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

export async function login(email, senha){
    const a = await api.post('/usuario/login',{
        email: email,
        senha: senha
    });
    return a.data;
}



//endereco




export async function salvar(idUsuario, cep, rua, bairro, cidade, estado, numero, complemento) {
    const r = await api.post('/api/usuario/' + idUsuario + '/endereco', {  cep, rua, bairro, cidade, estado, numero, complemento });
    return r.data;
}


export async function listar(idUsuario) {
    const r = await api.get('/api/usuario/' + idUsuario + '/endereco');
    return r.data;
}