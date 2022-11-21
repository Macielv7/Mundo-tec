import { loginadmmm } from '../../../api/loginadmAPI';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss'
import Storage from 'local-storage'
import Header from "../../../components/header"


export default function Index() {


	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const [erro, setErro] = useState('');

	const navigate = useNavigate();

   
	async function loginClick() {

		try{
		  const r = await loginadmmm(email,senha)
		  Storage('usuario-logado', r)
		  navigate('/cadastrarp');
	  
		}
	  
		catch(err){
		  if(err.response.status === 401){
			  setErro(err.response.data.erro)
		  }
	  }
	  }


	return (
		<main className='page-login-usu'>

			<Header />

			<img class="wave" src="./img/wave.png" />
			<div class="contaiiner">
				<div class="img">
					<img src="./img/Mobile login-bro.png" />
				</div>
				<div class="login-content">
					<div className='conteudooo'>

						<h2 class="title">Faça login</h2>
						<div class="input-div one">
							<div class="i">
								<i class="fas fa-user"></i>
							</div>
							<div class="div">

								<input type="text" placeholder="Usuario" class="input" value={email} onChange={e => setEmail(e.target.value)} />
							</div>
						</div>
						<div class="input-div pass">
							<div class="i">
								<i class="fas fa-lock"></i>
							</div>
							<div class="div">
								
								<input placeholder="senha" class="input" value={senha} onChange={e => setSenha(e.target.value)} />
							</div>
						</div>
						

						<button className='btn' type="button" onClick={loginClick} > Entrar </button>

						

					</div>

					
					<div className='err'>
						{erro}
					</div>
					
				</div>
			</div>

		</main>
	)
}