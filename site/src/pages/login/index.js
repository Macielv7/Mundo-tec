import { loginUsuario } from '../../api/usuario.js';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss'
import storage from 'local-storage'

export default function Index() {
  

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

async function loginClick() {

  try{
    const r = await loginUsuario(email,senha)
    storage('usuario-logado', r)
    navigate('/adm4');

  }


  
  catch(err){
    if(err.response.status === 401){
        setErro(err.response.data.erro)
    }
}
}

    return (
        <main className='page-login'>
             

         
	<img class="wave" src="./img/wave.png"/>
	<div class="container">
		<div class="img">
			<img src="./img/Mobile login-bro.png"/>
		</div>
		<div class="login-content">
			<form >
				
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
            	
                
               
				<div className='invalido'>
                {erro}
                     
                
            </div>
				<p >Cadastre-se agora  </p>
            </form>
            <input type="submit" class="btn" value="Login"  onClick={loginClick}/>
            
        </div>
    </div>
        </main>
    )
}


