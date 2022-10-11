
import { con } from "./connection.js";


export async function cadastrarProduto(produto) {
    const comando = 
        `INSERT INTO tb_produto (id_departamento, nm_produto, vl_preco, vl_desconto, dt_valorantigo )
                       VALUES ( ?, ?, ?, ?, ? ) `
    
    const [resposta] = await con.query(comando, [ produto.departamento,produto.nome, produto.preco, produto.desconto, produto.antigo ]);
    produto.id = resposta.insertId;

    return produto;
}


export async function alterarImagem(imagem, id) {
    const comando =
        `UPDATE tb_produto 
            SET img_produto     = ?
        WHERE id_produto        = ? `;
    
    const [resposta] = await con.query(comando, [imagem, id]);
    return resposta.affectedRows;
}


export async function listarTodosProdutos() {
    const comando =
        `SELECT id_produto		id,
                id_departamento departamento,
                nm_produto		nome,
                nm_categoria	categoria,
                vl_preco	    preco,
                vl_desconto	    desconto,
                dt_valorantigo  antigo,
                img_produto imagem
               
           FROM tb_produto`;
    
    const [linhas] = await con.query(comando);
    return linhas;
}


export async function buscarPorId(id) {
    const comando =
        `SELECT id_produto		id,
                nm_produto		nome,
                nm_categoria	categoria,
                img_produto     imagem,
                vl_preco	    preco,
                vl_desconto	    desconto,
                id_usuario      usuario
           FROM tb_produto
          WHERE id_produto = ? `;
    
    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}



export async function buscarPorNome(nome) {
    const comando =
        `SELECT id_produto		id,
                nm_produto		nome,
                nm_categoria	categoria,
                vl_preco	    preco,
                vl_desconto	    desconto,
                dt_valorantigo   antigo
           FROM tb_produto
          WHERE nm_produto like ? `;
    
    const [linhas] = await con.query(comando, [ `%${nome}%` ]);
    return linhas;
}



export async function removerProduto(id) {
    const comando =
        `DELETE FROM tb_produto 
               WHERE id_produto = ? `;
    
    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}










