import { buscarDepartamentoPorId } from "../repository/departamento.js";


export async function validarProduto(produto) {
    if (produto.nome == undefined ) {
        throw new Error('Nome do produto é obrigatório!');
    }
    else if (isNaN(produto.preco) || produto.preco <= 0) {
        throw new Error('Preço do produto é obrigatório!');
    }

}