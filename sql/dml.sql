insert into tb_login (ds_gmail, ds_senha)
	values ('tec','1234');
    

-- CSU01:: efetuar login
select id_login 		id,
		nm_doutor 		  nome,
		ds_gmail			 gmail,
       ds_senha			senha
  from tb_login
 where ds_gmail 		= 'tec'
   and ds_senha		= '1234';