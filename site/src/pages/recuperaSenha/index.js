
import './index.scss'
import Header from "../../components/header"


export default function Index() {
    

	

	return (
		<main className='page-login-usu'>

			<Header />

			<img class="wave" src="./img/wave.png" />
			<div class="coontaiiner">
				
				<div class="login-content">
					<div className='conteudooo'>

						
                         
					<div class="input-div one">
							<div class="i">
								<i class="fas fa-user"></i>
							</div>
							<div class="div">

								<input type="text" placeholder="Usuario" class="input"/>
							</div>
						</div>

						<div class="input-div pass">
							<div class="i">
								<i class="fas fa-lock"></i>
							</div>
							<div class="div">
								<input placeholder="senha" class="input"  />
							</div>
						</div>

					
					
					</div>
				</div>
			</div>

		</main>
	)
}