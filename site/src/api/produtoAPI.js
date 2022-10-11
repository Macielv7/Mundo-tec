import { API_URL } from './config.js';

import axios from 'axios';

const api = axios.create({
    baseURL: API_URL
})

export async function cadastrarProduto(idDepartamento, nome, preco,valorantigo, desconto){
    const r = await api.post('/produto', {
        departamento: idDepartamento,
        nome: nome,
        preco: preco,
        antigo: valorantigo,
        desconto: desconto,
    })

    return r.data;
}

export async function salvarImagens(id, imagem ){
    let form = new FormData();
    form.append('capa', imagem);


    const resposta = await api.put(`/produto/${id}/capa`, FormData, {
        headers:{       
            'Content-Type': 'multipart/form-data'
        }
    });

    return resposta.data
}


export async function listarTodosProdutos() {
    const resposta = await api.get('/produto');
    return resposta.data;
}

export async function prodPromoImperdivel(){
    const resposta = await api.get('/promocao');
    return resposta.data
}

export async function prodMaisVendidos(){
    const resposta = await api.get('/maisvendidos');
    return resposta.data
}

export async function depSelecionar(){
    const resposta = await api.get('/departamentos');
    return resposta.data
}

export async function buscarProdutoNome(nome) {
    const resposta = await api.get(`/produto/busca?nome=${nome}`);
    return resposta.data;
}


export function buscarImagem(imagem) {
    return `${api.getUri()}/${imagem}`
   
}

export async function alterarProduto(id, nome, preco, desconto, categorias,valorantigo) {
    await api.put('/admin/produto/' + id, { nome, preco, desconto, categorias,valorantigo });
}

export async function buscarProdutos() {
    const r = await api.get('/admin/produto');
    return r.data;
}

export async function buscarProdutoPorId(id) {
    const r = await api.get('/admin/produto/' + id);
    return r.data;
}


export async function deletaProduto(id){
    const resposta = await api.delete(`/produto/${id}`);
    return resposta.status;
  }

