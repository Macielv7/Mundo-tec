import { con } from "./connection.js";

export async function listarDestaque() {
    const comando = `
        select id_destaque         as id,
               nm_destaque         as destaque
          from tb_destaque
    `

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarDestaquePorId(id) {
    const comando = `
        select id_destaque         as id,
               nm_destaque         as destaque
          from tb_destaque
         where id_destaque = ?
    `

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}