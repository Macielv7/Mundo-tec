import React from 'react';
import './index.scss';

import storage from 'local-storage'
import { useState } from 'react';
import Header from "../../components/header"
import { toast } from 'react-toastify';
import { cadastroUsuario, loginUsuario } from '../../api/usuario.js';
import axios  from 'axios'
import { useNavigate } from 'react-router-dom'



 

export default function Index() {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [genero, setGenero] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmar, setConfirmar] = useState('');
    const navigate = useNavigate ()
    const [erro,setErro] = useState ('')



    async function CadastroClick() {

        try{
            const r = await cadastroUsuario(email,senha) 
            storage('usuario-logado', r)
          navigate('/Login');
        }
    
        catch(err){
          if(err.response.status === 401){
              setErro(err.response.data.erro)
          }
    
      }
    }
  
      
  
      async function salvarClick(){
        try{      
            const r = await cadastroUsuario (nome, cpf,  genero, email, telefone, senha, confirmar)
            storage('usuario-logado', r)
            navigate('/login');
        }
        catch (err){
            toast.error(err.response.data.erro)
        }
        
        
    }
  
  

 return (
    <div class="containerr">
        
    <div class="formmmm">
    <Header/>
        <form >
        
            <div class="form-headerr">
                <div class="title">
                    <h1>Faça o seu cadastro</h1>
                    <p>Preencha os campos para podermos realizar o cadastro</p>
                </div>
            </div>

            <div class="input-groupp">
                <div class="input-boxx">
                    <label for="firstname">Nome usuario</label>
                    <input  type="text"value={nome} onChange={e => setNome(e.target.value)}  placeholder="Digite seu nome" required/>
                </div>

                <div class="input-boxx">
                    <label for="lastname">CPF</label>
                    <input id="lastname" type="nu" value={cpf} onChange={e => setCpf(e.target.value)}  placeholder="0000.000.000" required/>
                </div>
                <div class="input-boxx">
                    <label for="email">Telefone</label>
                    <input id="phone" type="phone" value={telefone} onChange={e => setTelefone(e.target.value)}  placeholder="(xx) xxxx-xxxx" required/>
                </div>

                <div class="input-boxx">
                    <label for="number">Criar sua senha</label> 
                    <input  id="password" type="password" value={senha} onChange={e => setSenha(e.target.value)}  placeholder="Digite sua senha"required/>
                </div>

                <div class="input-boxx">
                    <label for="password">Email</label>
                    <input  id="email" type="email" value={email} onChange={e => setEmail(e.target.value)}  placeholder="@gmail.com" required/>
                </div>


                <div class="input-boxx">
                    <label for="confirmPassword">Confirme sua Senha</label>
                    <input id="confirmPassword" type="password" value={confirmar} onChange={e => setConfirmar(e.target.value)} placeholder="Comfime sua senha" required/>
                </div>

            </div>

            <div class="gender-inputs">
                <div class="gender-title">
                    <h6>Gênero</h6>
                </div>

                <div class="gender-group">
                    <div class="gender-input">
                        <input id="female" type="radio" name="gender" value={genero} onChange={e => setGenero(e.target.value)}/>
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
                <button onClick={salvarClick}>Cadastrar</button>
            </div>
        </form>
    </div>
</div>
)
}