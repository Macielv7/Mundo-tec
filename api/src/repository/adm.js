import { con } from './connection.js';

export async function loginAdmmm(user, senha){
    const comando = 
    `SELECT id_adm    id,
            DS_EMAIL          email
    FROM   tb_admin_login
    WHERE  ds_email      like  ?
    AND    ds_senha      like  ?`

    const [resposta] = await con.query(comando, [user, senha])
    return resposta[0];
}