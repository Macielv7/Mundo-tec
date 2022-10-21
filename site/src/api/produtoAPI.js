import { API_URL } from '../api/config'
import axios from 'axios'

const api = axios.create({
    baseURL: API_URL
})

export async function salvarProduto(nome, preco, desconto, valorantigo, marca, idDepartamento ) {
    const r = await api.post('/produto', { nome, preco, desconto, valorantigo, marca, idDepartamento });
    return r.data;
}

export async function alterarProduto(id, nome, preco, destaque, idDepartamento, categorias) {
    await api.put('/admin/produto/' + id, { nome, preco, destaque, idDepartamento, categorias });
}

export async function buscarProdutos() {
    const r = await api.get('/admin/produto');
    return r.data;
}

export async function salvarImagens(id, imagem1, imagem2, imagem3, imagem4) {
    
    let form = new FormData();
    form.append('imagens', imagem1);
    form.append('imagens', imagem2);
    form.append('imagens', imagem3);
    form.append('imagens', imagem4);

    const r = await api.put(`/produto/${id}/imagem`, form, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    return r.data;
}

export async function removerProduto(id) {
    const r = await api.delete('/admin/produto/' + id);
    return r.data;
}

export async function buscarProdutoPorId(id) {
    const r = await api.get('/api/produto/' + id);
    return r.data;
}

export async function listarProdutosInicio() {
    const r = await api.get('/api/produto');
    return r.data;
}


export async function listarTodosProdutos() {
    const resposta = await api.get('/produto')
    return resposta.data;
}

export async function buscarProdutoNome(nome) {
    const resposta = await api.get(`/produto/busca?nome=${nome}`);
    return resposta.data;
}

export async function RemoverProduto(id){
    const resposta = await api.delete(`/produto/${id}`);
    return resposta.status;
  }

  export function pegarImagem(imagem) {
    return `http://localhost:5000/${imagem}`
}
