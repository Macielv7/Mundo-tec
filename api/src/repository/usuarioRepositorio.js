import {con} from "./connection.js"

export async function Login (gmail, senha){

    const comando = `
    select id_login id,
	nm_doutor 		nomedoutor,
	ds_gmail			gmail,
    ds_senha		senha
  from tb_login
 where ds_gmail 		= ?
   and ds_senha		= ?
    `

    const [linhas] = await con.query(comando, [gmail,senha])
    return linhas[0];

    
}   