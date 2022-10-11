import { con } from "./connection.js";

export async function cadastrorUsuario(usuario) {
    const comando = `insert into tb_uasuario (nm_usuario, ds_cpf, ds_genero, ds_email, ds_telefone, ds_senha, ds_confirmar)
    values ( ?, ?, ?, ?, ?, ?, ? );`

    const [resposta] = await con.query(comando,[usuario.usuario,usuario.cpf,usuario.genero,usuario.email,usuario.telefone,usuario.senha,usuario.confirmar]);
    usuario.id = resposta.insertId;

    return usuario;
}

export async function loginUsuario (email, senha){
    const comando=
    `
    select  id_usuario	  id,
            ds_email	email
    from	tb_uasuario
    where	ds_email   = ?
    and	    ds_senha   = ? `
    const [linha] = await con.query(comando, [email, senha] )
    return linha[0];
}

export async function imagemUsuario(imagem, id){
    const comando = `UPDATE tb_usuario
                    SET img_usuario = ?
                    WHERE id_usuario = ?`;

    const [resposta] = await con.query(comando,[imagem, id]);
    return resposta.affectedRows;
}

export async function listarUsuario() {
    const comando =
    `select 
    id_usuario,
    nm_nome,
    dt_cpf,
    ds_email,
    ds_telefone,
    ds_genero,
    ds_senha,
    ds_confirmar,
    img_imagem
    from tb_usuario;`
    
    const [linhas] =  await con.query(comando);
    return linhas;
}