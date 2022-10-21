import React from 'react';
import { useForm } from 'react-hook-form';
import './index.scss';
import { useState } from 'react'
import { salvar } from '../../api/usuario';
import Storage from 'local-storage'
import { toast } from 'react-toastify'

export default function Index() {



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


    const [cep, setCEP] = useState('');
    const [numero, setNumero] = useState('');
    const [estado, setEstado] = useState('');
    const [rua, setRua] = useState('');
    const [cidade, setCidade] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');


    async function salvarEndereco() {
        try {
            const id = Storage('cliente-logado').id;
            const r = await salvar(id, cep, numero,estado, rua, cidade, complemento, bairro);
            toast.dark('Endereço salvo');

          
        }
        catch (err) {
            toast.error(err.response.data.erro);
        }
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
                    <input id="text" type="text" {...register("cep")} onBlur={checkCEP}  value={cep} onChange={e => setCEP(e.target.value)}  required/>
                </div>

            <div class="input-group">
                <div class="input-box">
                    <label for="firstname">Rua</label>
                    <input  type="text"{...register("address" )}  value={rua} onChange={e => setRua(e.target.value)}  required/>
                </div>

                <div class="input-box">
                    <label for="lastname">Numero de residencia</label>
                    <input id="text" type="text"  {...register("addressNumber" )}  value={numero} onChange={e => setNumero(e.target.value)} required/>
                </div>
                <div class="input-box">
                    <label for="email">Complemento</label>
                    <input id="text" type="text"  value={complemento} onChange={e => setComplemento(e.target.value)}  required/>
                </div>

                <div class="input-box">
                    <label for="number">Bairro</label>
                    <input id="text" type="text"  {...register("neighborhood" )}  value={bairro} onChange={e => setBairro(e.target.value)} required/>
                </div>

                <div class="input-box">
                    <label for="password">Cidade</label>
                    <input id="text" type="text"  {...register("city" )} value={cidade} onChange={e => setCidade(e.target.value)} required/>
                </div>


                <div class="input-box">
                    <label for="confirmPassword">Estado</label>
                    <input id="text" type="text" {...register("uf" )}  value={estado} onChange={e => setEstado(e.target.value)} required/>
                </div>

            </div>

           

            <div class="continue-button">
                <button onClick={salvarEndereco}>Cadastrar</button>
            </div>
        </form>
    </div>
</div>
)
}


