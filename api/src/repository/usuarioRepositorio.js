import { con } from "./connection.js";

export async function usuario(usuario){
    const linhas = `
        INSERT INTO TB_USUARIO(NM_USUARIO,  DS_CPF, DS_EMAIL, DS_CELULAR, DS_SENHA  )
                VALUES( ?, ?, ?, ?, ?, ?)
    `

    const [resp] = await con.query(linhas, [
        usuario.nome,
        usuario.cpf,
        usuario.email,
        usuario.celular,
        usuario.senha
        
    ])
    
    return resp.insertId;
}