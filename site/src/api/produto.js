import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})


export async function cadastrarProduto(nome,  disponivel,  usuario) {
    const resposta = await api.post('/Produto', {
        

       
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



export async function alterarProduto(id, nome,  disponivel,  usuario) {
    const resposta = await api.put(`/produto/${id}`, {
     
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