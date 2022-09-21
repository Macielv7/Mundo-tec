import './index.scss'
import Cabecalho from '../../components/cabecalho'


import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Index(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('')

    const navigate = useNavigate()

async function entrarClick(){
    try{
        const r = await axios.post('http://localhost:5000/usuario', {
            gmail:email,
            senha:senha
        });

        navigate('/adimin/adm1')

    }catch (err) {
        if(err.response.status ==401){
            setErro(err.response.data.erro);
        }
        }            
}

function mostra(){
    const senha = document.getElementById("senha");
    if (senha.type=== "password") {
        senha.type="text";
        
    }
    else
    senha.type="password"
}

    return (
        <main className='page-login'>
            <Cabecalho />

         
	<img class="wave" src="./img/wave.png"/>
	<div class="container">
		<div class="img">
			<img src="./img/Mobile login-bro.png"/>
		</div>
		<div class="login-content">
			<form action="index.html">
				
				<h2 class="title">Faça login</h2>
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<input type="text" class="input"  placeholder="Usuario"  value={email} onChange={e => setEmail(e.target.value)}/>
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
                        
           		    	<input type="password" placeholder="Senha" class="input" value={senha} onChange={e => setSenha(e.target.value)} Id='senha' />
            	   </div>
            	</div>
            	<a href="#">Esqueceu a senha?</a>
            	<input type="submit" class="btn" value="Login"  onClick={entrarClick}/>
				<div className='invalido'>
                {erro}
                     
            </div>

				<p >Cadastre-se agora  </p>

            </form>
        </div>
    </div>
        </main>
    )
}