


import './index.scss';



export default function Index() {
 return (
    <div class="container">
        
    <div class="form">
        <form action="#">
        
            <div class="form-header">
                <div class="title">
                    <h1>Faça o seu cadastro</h1>
                    <p>Preencha os campos para podermos realizar o cadastro</p>
                </div>
            </div>

            <div class="input-group">
                <div class="input-box">
                    <label for="firstname">Nome usuario</label>
                    <input id="firstname" type="text" name="firstname" placeholder="Digite seu nome" required/>
                </div>

                <div class="input-box">
                    <label for="lastname">CPF</label>
                    <input id="lastname" type="text" name="lastname" placeholder="0000.000.000" required/>
                </div>
                <div class="input-box">
                    <label for="email">Telefone</label>
                    <input id="email" type="email" name="email" placeholder="(xx) xxxx-xxxx" required/>
                </div>

                <div class="input-box">
                    <label for="number">Criar sua senha</label>
                    <input id="number" type="tel" name="number" placeholder="Digite sua senha" required/>
                </div>

                <div class="input-box">
                    <label for="password">Email</label>
                    <input id="password" type="password" name="password" placeholder="@gmail.com" required/>
                </div>


                <div class="input-box">
                    <label for="confirmPassword">Confirme sua Senha</label>
                    <input id="confirmPassword" type="password" name="confirmPassword" placeholder="Comfime sua senha" required/>
                </div>

            </div>

            <div class="gender-inputs">
                <div class="gender-title">
                    <h6>Gênero</h6>
                </div>

                <div class="gender-group">
                    <div class="gender-input">
                        <input id="female" type="radio" name="gender"/>
                        <label for="female">Feminino</label>
                    </div>

                    <div class="gender-input">
                        <input id="male" type="radio" name="gender"/>
                        <label for="male">Masculino</label>
                    </div>

                    <div class="gender-input">
                        <input id="others" type="radio" name="gender"/>
                        <label for="others">Outros</label>
                    </div>

                </div>
            </div>

            <div class="continue-button">
                <button><a href="#">Cadastrar</a> </button>
            </div>
        </form>
    </div>
</div>
)
}