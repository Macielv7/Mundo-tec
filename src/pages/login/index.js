import './index.scss'
import Cabecalho from '../../components/cabecalho'


export default function Index() {
    return (
        <main className='page-login'>
            <Cabecalho />

            <div class="coonteudoo">
                <div class="conteudo-formularioo">

                    <div class="formularioo">
                        <div className='gra'>
                        <img src="./images/online_registration_form_and_Sign_in_button_generated" alt="" class="img-dental" />
                        </div>
                        <h1 class="titulo">faça seu login</h1>
                        <label>
                            <input type="text" placeholder="Usuario" class="campo" />

                            <input type="password" placeholder="Senha" class="campo" />

                        </label>
                        <button class="bntt"> LOGIN</button>
                        <p class="campo-checkbox">Cadastre-se agora  </p>
                        
                    </div>
                </div>
            </div>
        </main>
    )
}

