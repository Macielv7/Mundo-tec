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

  export async function buscarUsuarioPorId(id){
    const resposta = await api.get(`/usuario/${id}`)
    return resposta.data;
}  

export async function alteraUsuario(id, nome, nascimento, email, senha){
    const resposta = await api.put(`/usuario/${id}`, {
        nome: nome,
        nasc: nascimento,
        email: email,
        senha: senha
    })
    return resposta.data;
}

export async function enviarImagemUsuario(id, imagem){
    const formData = new FormData ();
    formData.append('capa', imagem);

    const resposta = await api.put(`/cadastroUsuario/${id}/capa`, formData,{
        headers:{
            "Content-type": "multipart/form-data"
        },
    });

    return resposta.status;
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