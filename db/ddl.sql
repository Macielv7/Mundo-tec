CREATE DATABASE Tec;
USE Tec;

CREATE TABLE tb_login (
id_login int primary key auto_increment,
nm_doutor varchar(50),
ds_gmail varchar (100),
ds_senha varchar(100)
);    

CREATE TABLE tb_produto (
	id_produto		int primary key auto_increment,
    id_usuario		int,
    nm_produto		varchar(200),
    vl_avaliacao	decimal(15,2),
    dt_lancamento	date,
    bt_disponivel	boolean,
    img_produto       varchar(800),
    FOREIGN KEY (id_usuario) REFERENCES tb_usuario (id_usuario)
);

     