import { con } from "./connection.js";


export async function inserirProduto(produto) {
    const comando = 
        `insert into tb_produto (nm_produto,nm_categoria ,vl_preco,dt_desconto, bt_disponivel)
        values (?,?,?,?,?) `
    
    const [resposta] = await con.query(comando, [produto.nome, produto.categoria,  produto.preco, produto.desconto, produto.disponivel ]);
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
        `SELECT id_filme		id,
                nm_filme		nome,
                vl_avaliacao	avaliacao,
                dt_lancamento	lancamento,
                bt_disponivel	disponivel,
                id_usuario      usuario
           FROM tb_filme`;
    
    const [linhas] = await con.query(comando);
    return linhas;
}


export async function buscarPorId(id) {
    const comando =
        `SELECT id_produto		id,
                nm_produto		nome,
                img_produto       imagem,
                vl_avaliacao	avaliacao,
                dt_lancamento	lancamento,
                bt_disponivel	disponivel,
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
                vl_avaliacao	avaliacao,
                dt_lancamento	lancamento,
                bt_disponivel	disponivel,
                id_usuario      usuario
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




export async function alterarProduto(id, produto) {
    const comando = 
        `UPDATE tb_produto
            SET nm_produto     = ?,
                vl_avaliacao  = ?,
                dt_lancamento = ?,
                bt_disponivel = ?,
                id_usuario    = ?
          WHERE id_produto      = ?`
    
    const [resposta] = await con.query(comando, [produto.nome,  produto.avaliacao, produto.lancamento, produto.disponivel, produto.usuario, id]);
    return resposta.affectedRows;
}

