


CREATE DATABASE Tec;
USE Tec;

drop database tec;

select * from tb_login;

CREATE TABLE tb_login (
id_login int primary key auto_increment,
nm_doutor varchar(50),
ds_gmail varchar (100),
ds_senha varchar(100)
);    

insert into tb_login (nm_doutor, ds_gmail, ds_senha)
values ('micka','adm', 123);

CREATE TABLE TB_PRODUTO(
ID_PRODUTO               INT PRIMARY KEY AUTO_INCREMENT,
ID_DEPARTAMENTO          INT,
NM_PRODUTO               VARCHAR(200),
NM_CATEGORIA			 VARCHAR(200),
VL_PRECO                 DECIMAL(5,2),
VL_DESCONTO              DECIMAL(5,2),
DT_DISPONIVEL	 		 BOOLEAN,
IMG_PRODUTO       		 VARCHAR(800),

FOREIGN KEY(ID_DEPARTAMENTO) REFERENCES TB_DEPARTAMENTO (ID_DEPARTAMENTO)
);


select * FROM TB_PRODUTO;


create table tb_departamento (
	id_departamento	   int primary key auto_increment,
    nm_departamento    varchar(200)
);

create table tb_categoria (
	id_categoria		int primary key auto_increment,
    nm_categoria		varchar(200)
);

create table tb_produto_categoria (
	id_produto_categoria	int primary key auto_increment,
    id_categoria			int,
    id_produto				int,
    foreign key (id_categoria) references tb_categoria (id_categoria),
    foreign key (id_produto) references tb_produto (id_produto)
);


select * from tb_categoria;

select * from tb_departamento;