CREATE DATABASE Tec;
USE Tec;

drop database tec;

select * from tb_login;   

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

create table tb_produto_imagem (
	id_produto_imagem	    int primary key auto_increment,
    id_produto				int,
    ds_imagem   			varchar(800),
    foreign key (id_produto) references tb_produto (id_produto)
);


CREATE TABLE TB_USUARIO(
ID_USUARIO        INT PRIMARY KEY AUTO_INCREMENT,
NM_USUARIO        VARCHAR(100),
DS_CPF            VARCHAR(14),
DS_EMAIL          VARCHAR(100),
DS_GENERO         VARCHAR(100),
DS_TELEFONE       VARCHAR(100),
DS_SENHA          VARCHAR(100)
);


create table tb_usuario_endereco(
    id_usuario_endereco     int primary key auto_increment,
    id_usuario               int,
    DS_CEP                   varchar(100),
    nm_numero                int,
    NM_ESTADO                varchar(100),
    DS_CASA                  varchar(8),
    NM_CIDADE                varchar(300),
    DS_COMPLEMENTO           varchar(200),
    NM_BAIRRO                varchar(100),
    foreign key (id_usuario)  references tb_usuario (id_usuario)
)

CREATE TABLE TB_ADMIN_LOGIN(
ID_ADMIN_LOGIN   INT PRIMARY KEY AUTO_INCREMENT,
DS_EMAIL         VARCHAR(100),
DS_SENHA         VARCHAR(100)
);

CREATE TABLE TB_LOGIN(
ID_LOGIN         INT PRIMARY KEY AUTO_INCREMENT,
ID_USUARIO       INT,
FOREIGN KEY (ID_USUARIO) REFERENCES TB_USUARIO (ID_USUARIO)
);