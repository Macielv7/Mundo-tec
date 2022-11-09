create database mundotec;
use mundotec;

drop database mundotec;



create table tb_departamento (
	id_departamento	   int primary key auto_increment,
    nm_departamento    varchar(200)
);

select * from tb_departamento;

insert into tb_departamento (nm_departamento)
values ( 'Periféricos');
insert into tb_departamento (nm_departamento)
values ( 'Celulares');
insert into tb_departamento (nm_departamento)
values ( 'TV');
insert into tb_departamento (nm_departamento)
values ( 'Casa Inteligente');
insert into tb_departamento (nm_departamento)
values ( 'Hardware');
insert into tb_departamento (nm_departamento)
values ( 'Games');
insert into tb_departamento (nm_departamento)
values ( 'Espaço Gamer');
insert into tb_departamento (nm_departamento)
values ( 'Câmeras e Drones');
insert into tb_departamento (nm_departamento)
values ( 'Áudio');

create table tb_produto(
id_produto               int primary key auto_increment,
id_departamento          int,
nm_produto               varchar(200),
vl_preco                 decimal(10,2),
vl_desconto              decimal(10,2),
dt_valorantigo	 		 decimal(10,2),
ds_marca             	 varchar(200),

foreign key (id_departamento) references tb_departamento (id_departamento)
);


select * from tb_produto;


create table tb_produto_imagem (
	id_produto_imagem	    int primary key auto_increment,
    id_produto				int,
    ds_imagem   			varchar(800),
    foreign key (id_produto) references tb_produto (id_produto)
);



select * from tb_produto_imagem;


create table tb_usuario (
	id_usuario			int primary key auto_increment,
    nm_usuario			varchar(200),
    ds_telefone			varchar(200),
    ds_cpf				varchar(200),
    ds_email	  		varchar(800),
    ds_genero			varchar(200),
    ds_senha			varchar(200),
    ds_confirmar		varchar(200)
);

 DELETE FROM tb_usuario;

select*from tb_usuario;
select*from tb_login_usuario;


create table  tb_login_usuario (
	id_login_usuario	    int primary key auto_increment,
    id_usuario				int,
    ds_email	  			varchar(800),
    ds_senha	  			varchar(800),
    bt_trocar				boolean,
    cod_reset				varchar(20),
    dt_expiracao_cod		datetime,
    foreign key (id_usuario) references tb_usuario (id_usuario)
);

select md5('123');



create table   tb_usuario_endereco(
    id_usuario_endereco     int primary key auto_increment,
    id_usuario               int,
    ds_cep                   varchar(100),
    ds_rua					 varchar(200),
    nm_numero                int,
    nm_estado                varchar(100),
    nm_cidade                varchar(300),
    ds_complemento           varchar(200),
    nm_bairro                varchar(100),
    foreign key (id_usuario)  references tb_usuario (id_usuario)
);

insert into tb_usuario_endereco(id_usuario,ds_cep,ds_rua,nm_numero,nm_estado,nm_cidade,ds_complemento,nm_bairro)
values(1,'75674-756','rua um','34','sp','sao paulo','casa','cocaia');

select*from tb_usuario_endereco;

create table tb_cupom (
	id_cupom			int primary key auto_increment,
    cod_cupom			varchar(200),
    vl_cupom			decimal(15,2),
    qtd_restante		int
);


create table tb_pedido (
	id_pedido			int primary key auto_increment,
    id_usuario			int,
    id_usuario_endereco	int,
    id_cupom			int,
    dt_pedido			datetime,
    cod_nota_fiscal		varchar(200),
    tp_frete			varchar(200),
    vl_frete			decimal(15,2),
    ds_status			varchar(200),
    tp_pagamento		varchar(200),
    foreign key (id_usuario) references tb_usuario (id_usuario),
    foreign key (id_usuario_endereco) references tb_usuario_endereco (id_usuario_endereco),
    foreign key (id_cupom) references tb_cupom (id_cupom)
);


create table tb_pedido_item (
	id_pedido_item		int primary key auto_increment,
    id_pedido			int,
    id_produto			int,
    qtd_itens			int,
    vl_produto			decimal(15,2),
    foreign key (id_pedido) references tb_pedido (id_pedido),
    foreign key (id_produto) references tb_produto (id_produto)
);


create table tb_pagamento_cartao (
	id_pagamento_cartao	int primary key auto_increment,
    id_pedido			int,
    nm_cartao			varchar(200),
    nr_cartao			varchar(200),
    dt_vencimento		varchar(200),
    cod_seguranca		varchar(200),
    nr_parcelas			int,
    ds_forma_pagamento	varchar(200),
    foreign key (id_pedido) references tb_pedido (id_pedido)
);