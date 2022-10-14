create database oi;
use oi;

drop database oi;



create table tb_departamento (
	id_departamento	   int primary key auto_increment,
    nm_departamento    varchar(200)
);

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


create table tb_destaque (
	id_destaque		int primary key auto_increment,
    nm_destaque		varchar(200)
);

create table tb_produto_destaque (
	id_produto_destaque	int primary key auto_increment,
    id_destaque			int,
    id_produto				int,
    foreign key (id_destaque) references tb_detaque (id_destaque),
    foreign key (id_produto) references tb_produto (id_produto)
);

insert into tb_destaque (nm_destaque)
values ( 'Mais vendidos');
insert into tb_destaque (nm_destaque)
values ( 'Lançamentos');


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
    dt_nascimento		date,
    ds_telefone			varchar(200),
    ds_cpf				varchar(200),
    ds_genero			varchar(200)
);

create table tb_login_usuario (
	id_login_usuario	    int primary key auto_increment,
    id_usuario				int,
    ds_email	  			varchar(800),
    ds_senha	  			varchar(800),
    bt_trocar				boolean,
    cod_reset				varchar(20),
    dt_expiracao_cod		datetime,
    foreign key (id_usuario) references tb_usuario (id_usuario)
);


 select tb_produto.id_produto        as id,
            nm_produto                      as produto,
            vl_preco                        as preco,
            bt_desconto                     as desconto,
            nm_departamento                 as departamento,
            dt_valorantigo                  as valorantigo,
            ds_marca                        as marca
       
         order   by tb_produto.id_produto,
                nm_produto,
                vl_preco,
                vl_desconto ,
                nm_departamento,
                dt_valorantigo,
                ds_marca
        

