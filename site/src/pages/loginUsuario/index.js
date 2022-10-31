import { logar } from '../../api/usuario';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss'
import Storage from 'local-storage'
import Header from "../../components/header"
import { toast } from 'react-toastify';

export default function Index() {


	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const [erro, setErro] = useState('');

	const navigate = useNavigate();

    async function loginClick() {
        try {
            const r = await logar(email, senha);
            Storage('cliente-logado', r);
            toast.dark('Usuário logado', { autoClose: 400, hideProgressBar: true });

            setTimeout(() => {
                navigate('/');
            }, 1500);
            
        }
        catch (err) {
            toast.error(err.response.data.erro);
        }
    }



	return (
		<main className='page-login'>

			<Header />

			<img class="wave" src="./img/wave.png" />
			<div class="container">
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
						<a href="#">Esqueceu senha</a>

						<button className='btn' type="button" onClick={loginClick} > Entrar </button>

						<a href="/criarconta">Faça seu cadastro</a>

					</div>
					<div className='err'>
						{erro}
					</div>
					
				</div>
			</div>

		</main>
	)
}