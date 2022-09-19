import './index.scss'
import Cabecalho from '../../components/cabecalho'


export default function Index() {
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
           		   		<h5>Usuario</h5>
           		   		<input type="text" class="input"/>
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>Senha</h5>
           		    	<input type="password" class="input"/>
            	   </div>
            	</div>
            	<a href="#">Esqueceu a senha?</a>
            	<input type="submit" class="btn" value="Login"/>
				<p >Cadastre-se agora  </p>
            </form>
        </div>
    </div>
        </main>
    )
}

