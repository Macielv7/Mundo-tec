CREATE DATABASE Tec;
USE Tec;

select * from tb_login;

CREATE TABLE tb_login (
id_login int primary key auto_increment,
nm_doutor varchar(50),
ds_gmail varchar (100),
ds_senha varchar(100)
);    

insert into tb_login (nm_doutor, ds_gmail, ds_senha)
values ('micka','adm', 123);

CREATE TABLE tb_produto (
	id_produto		int primary key auto_increment,
    id_usuario		int,
    nm_produto		varchar(200),
    nm_categoria	varchar(200),
    vl_preco	int,
    dt_desconto int,
    bt_disponivel	boolean,
    img_produto       varchar(800),
    FOREIGN KEY (id_usuario) REFERENCES tb_usuario (id_usuario)
);


     