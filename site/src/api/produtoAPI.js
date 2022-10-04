import { API_URL } from './config'
import axios from 'axios'

const api = axios.create({
    baseURL: API_URL
})


export async function salvarProduto(nome ,preco, destaque,descricao, desconto, disponivel, idDepartamento, categorias) {
    const r = await api.post('/admin/produto', { nome, preco, destaque, descricao, desconto, disponivel, idDepartamento, categorias });
    return r.data;
}

export async function cadastrarProduto(nome, categoria, preco, disponivel, desconto, descricao) {
    const resposta = await api.post('/Produto', {
        nome: nome,
        categoria: categoria,
        preco: preco,
        desconto: desconto,
        descricao: descricao,
        disponivel: disponivel

       
    })
    return resposta.data;
}


export async function enviarImagemProduto(id, imagem) {
    const formData = new FormData();
    formData.append('capa', imagem);

    const resposta = await api.put(`/produto/${id}/capa`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    });

    return resposta.status;
}



export async function alterarProduto(id, nome, categoria, preco, disponivel, desconto, descricao) {
    const resposta = await api.put(`/produto/${id}`, {
        nome: nome,
        categoria: categoria,
        preco: preco,
        desconto: desconto,
        descricao: descricao,
        disponivel: disponivel
    })
    return resposta.data;
}


export async function listarTodosProduto() {
    const resposta = await api.get('/produto');
    return resposta.data;
}

export async function buscarProdutoPorNome(nome) {
    const resposta = await api.get(`/produto/busca?nome=${nome}`);
    return resposta.data;
}

export async function removerProduto(id) {
    const resposta = await api.delete(`/produto/${id}`);
    return resposta.status;
}


export async function buscarPorId(id) {
    const resposta = await api.get(`/produto/${id}`);
    return resposta.data;
}


export function buscarImagem(imagem) {
    return `${api.getUri()}/${imagem}`

}