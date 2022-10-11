import React from 'react';
import { useForm } from 'react-hook-form';
import './index.scss';

function App() {



  const { register, handleSubmit, setValue, setFocus } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  }

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
      console.log(data);
      // register({ name: 'address', value: data.logradouro });
      setValue('address', data.logradouro);
      setValue('neighborhood', data.bairro);
      setValue('city', data.localidade);
      setValue('uf', data.uf);
      setFocus('addressNumber');
    });
  }

  return (
    <div class="container">
        
    <div class="form">
        <form action="#">
        
            <div class="form-header">
                <div class="title">
                    <h1>Faça o seu cadastro</h1>
                    <p>Preencha os campos para podermos enviar seus produtos</p>
                </div>
            </div>

            <div class="input-box">
                    <label for="lastname">Cep</label>
                    <input id="text" type="text" {...register("cep")} onBlur={checkCEP}   required/>
                </div>

            <div class="input-group">
                <div class="input-box">
                    <label for="firstname">Rua</label>
                    <input  type="text"{...register("address" )}   required/>
                </div>

                <div class="input-box">
                    <label for="lastname">Numero de residencia</label>
                    <input id="text" type="text"  {...register("addressNumber" )}  required/>
                </div>
                <div class="input-box">
                    <label for="email">Complemento</label>
                    <input id="text" type="text"   required/>
                </div>

                <div class="input-box">
                    <label for="number">Bairro</label>
                    <input id="text" type="text"  {...register("neighborhood" )}  required/>
                </div>

                <div class="input-box">
                    <label for="password">Cidade</label>
                    <input id="text" type="text"  {...register("city" )} placeholder="" required/>
                </div>


                <div class="input-box">
                    <label for="confirmPassword">Estado</label>
                    <input id="text" type="text" {...register("uf" )} placeholder="" required/>
                </div>

            </div>

           

            <div class="continue-button">
                <button >Cadastrar</button>
            </div>
        </form>
    </div>
</div>
)
}

export default App;
