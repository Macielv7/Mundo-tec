import { API_URL } from './config'
import axios from 'axios'

const api = axios.create({
    baseURL: API_URL
})


export async function salvarProduto(nome, preco, desconto, disponivel, idDepartamento, descricao, categorias) {
    const r = await api.post('/admin/adm4', { nome, preco, desconto, disponivel, idDepartamento, descricao, categorias });
    return r.data;
}



export async function alterarProduto(id, nome, preco, desconto, disponivel, idDepartamento, descricao, categorias) {
    await api.put('/admin/adm4/' + id, { nome, preco, desconto, disponivel, idDepartamento, descricao, categorias });
}



export async function buscarProdutos() {
    const r = await api.get('/admin/adm4');
    return r.data;
}


export async function salvarImagens(id, imagem1, imagem2, imagem3, imagem4) {
    
    let form = new FormData();
    form.append('imagens', imagem1);
    form.append('imagens', imagem2);
    form.append('imagens', imagem3);
    form.append('imagens', imagem4);

    const r = await api.put(`/admin/adm4/${id}/imagem`, form, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    return r.data;
}



export async function removerProduto(id) {
    const r = await api.delete('/admin/adm4/' + id);
    return r.data;
}



export async function buscarProdutoPorId(id) {
    const r = await api.get('/admin/adm4/' + id);
    return r.data;
}

