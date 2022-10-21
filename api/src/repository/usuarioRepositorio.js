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


export async function listar(idUsuario) {
    const comando = `
     select id_usuario_endereco		id,
            ds_cep                  cep,
            nm_numero                numero,
            nm_estado               estado,
            ds_casa                  casa,
            nm_cidade              cidade,
            ds_complemento           complemento,
            nm_bairro               bairro,
       from tb_usuario_endereco 
      where id_usuario = ?
    `

    const [registros] = await con.query(comando, [idUsuario]);
    return registros;
}



export async function salvar(idUsuario, endereco) {
    const comando = `
    insert into tb_usuario_endereco (id_usuario, ds_cep, nm_numero, nm_estado, ds_casa, nm_cidade, ds_complemento, nm_bairro)
                             values (?, ?, ?, ?, ?, ?, ?, ?)
    `

    const [info] = await con.query(comando, [idUsuario, endereco.referencia, endereco.cep, endereco.logradouro, endereco.bairro, endereco.cidade, endereco.estado, endereco.numero, endereco.complemento]);
    return info.insertId;
}