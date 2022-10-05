import React from 'react';
import { useForm } from 'react-hook-form';
import './index.scss';

function App() {

    

  const {register, handleSubmit, setValue, setFocus} = useForm();

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
    <form onSubmit={handleSubmit(onSubmit)}>

<div class="form-header">
                <div class="title">
                    <h1>Faça o seu cadastro</h1>
                    <p>Preencha os campos para podermos realizar o cadastro</p>
                </div>
            </div>


        <div class="input-group">

        

      

      <div class="input-box">
                    <label for="firstname">Nome usuario</label>
                    <input type="text" {...register("cep")} onBlur={checkCEP} />
                </div>

      

      <div class="input-box">
                    <label for="firstname">Nome usuario</label>
                    <input type="text" {...register("address" )}/>
                </div>

      

      <div class="input-box">
                    <label for="firstname">Nome usuario</label>
                    <input type="text" {...register("addressNumber" )}/>
                </div>
      
      

      <div class="input-box">
                    <label for="firstname">Nome usuario</label>
                    <input type="text" {...register("neighborhood" )}/>
                </div>

     

      <div class="input-box">
                    <label for="firstname">Nome usuario</label>
                    <input type="text" {...register("city" )}/>
                </div>

      

      <div class="input-box">
                    <label for="firstname">Nome usuario</label>
                    <input type="text" {...register("uf" )}/>
                </div>

      
      </div>

      <div class="continue-button">
                <button><a href="#">Cadastrar</a> </button>
            </div>
    </form>
    </div>
  );
}

export default App;
