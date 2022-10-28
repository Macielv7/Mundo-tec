import { con } from "./connection.js";

export async function cadastrorUsuario(usuario) {
    const comando = `insert into tb_usuario (nm_usuario, ds_cpf, ds_genero, ds_email, ds_telefone, ds_senha, ds_confirmar)
    values ( ?, ?, ?, ?, ?, ?, ? );`

    const [resposta] = await con.query(comando,[usuario.usuario,usuario.cpf,usuario.genero,usuario.email,usuario.telefone,usuario.senha,usuario.confirmar]);
    usuario.id = resposta.insertId;

    return usuario;
}


export async function login(email, senha) {
    const comando = `
     select tb_usuario.id_usuario		id,
            nm_usuario					nome
       from tb_usuario
       inner join tb_login_usuario on tb_login_usuario.id_usuario = tb_usuario.id_usuario
      where ds_email = ?
        and ds_senha = md5(?)
    `

    const [registros] = await con.query(comando, [email, senha]);
    return registros[0];
}


export async function loginUsuario (email, senha){
    const comando=
    `
    select  id_usuario	  id,
            ds_email	email
    from	tb_usuario
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
            ds_cep					cep,
            nm_numero               numero,
            ds_rua			rua,
            nm_bairro				bairro,
            nm_cidade				cidade,
            nm_estado				estado,
            ds_complemento			complemento
       from tb_usuario_endereco 
      where id_usuario = ?
    `

    const [registros] = await con.query(comando, [idUsuario]);
    return registros;
}

export async function salvar(idUsuario, endereco) {
    const comando = `
    insert into tb_usuario_endereco (id_usuario,  ds_cep, ds_rua, nm_bairro, nm_cidade, nm_estado, nm_numero, ds_complemento)
                             values (?, ?, ?, ?, ?, ?, ?, ?)
    `

    const [info] = await con.query(comando, [idUsuario,  endereco.cep, endereco.rua, endereco.bairro, endereco.cidade, endereco.estado, endereco.numero, endereco.complemento]);
    return info.insertId;
}