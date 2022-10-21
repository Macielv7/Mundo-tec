create database oo;
use oo;

drop database oo;



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

select tb_produto.id_produto		id,
               nm_produto					produto,
               vl_preco						preco,
               nm_departamento				departamento,
                dt_valorantigo 				valorantigo,    
            ds_marca						marca,
               min(ds_imagem)				imagem
          from tb_produto
    inner join tb_departamento on tb_produto.id_departamento = tb_departamento.id_departamento
     left join tb_produto_imagem on tb_produto_imagem.id_produto = tb_produto.id_produto
         group 
            by tb_produto.id_produto,
               nm_produto,
               vl_preco,
               nm_departamento,
                dt_valorantigo ,    
            ds_marca;

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


create table tb_usuario_endereco(
    id_usuario_endereco     int primary key auto_increment,
    id_usuario               int,
    ds_cep                   varchar(100),
    nm_numero                int,
    nm_estado                varchar(100),
    ds_casa                  varchar(8),
    nm_cidade                varchar(300),
    ds_complemento           varchar(200),
    nm_bairro                varchar(100),
    foreign key (id_usuario)  references tb_usuario (id_usuario)
);

select*from tb_usuario_endereco;


 select tb_produto.id_produto,
            nm_produto,         
            vl_preco,      
                 
            nm_departamento,          
            dt_valorantigo ,    
            ds_marca           
 from tb_produto
 inner join tb_departamento on tb_produto.id_departamento = tb_departamento.id_departamento
        group
        by tb_produto.id_produto,
		nm_produto,         
            vl_preco,      
                    
            nm_departamento,          
            dt_valorantigo ,    
            ds_marca       ;
            
            
            
            select id_produto                      as id,
                nm_produto                      as produto,
                vl_preco                        as preco,
                dt_valorantigo                  as valorantigo,
                tb_produto.id_departamento      as departamento,
                nm_departamento                 as nomeDepartamento
        from tb_produto 
        inner join tb_departamento on tb_departamento.id_departamento = tb_produto.id_departamento
