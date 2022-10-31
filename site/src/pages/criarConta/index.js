import React from 'react';
import './index.scss';

import storage from 'local-storage'
import { useState } from 'react';
import Header from "../../components/header"
import { toast } from 'react-toastify';
import { cadastroUsuario, loginUsuario } from '../../api/usuario.js';
import axios  from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Index(){

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
          navigate('/LoginUsuario');
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
            navigate('/LoginUsuario');
        }
        catch (err){
            toast.error(err.response.data.erro)
        }
        
        
    }


    return(
        <main className="Cadastrarusu">
            <div class="container">
       
        <div class="f">
          
                <div class="form-header">
                    <div class="title">
                        <h1>Faça o seu Cadastro</h1>
                        <p>Preencha os campos para podermos realizar o cadastro</p>
                    </div>
                   
                </div>

                <div class="input-group">
                    <div class="input-box">
                        <label for="firstname">Primeiro Nome</label>
                        <input  type="text"  placeholder="Digite seu primeiro nome" value={nome} onChange={e => setNome(e.target.value)}/>
                    </div>

                    <div class="input-box">
                        <label for="lastname">cpf</label>
                        <input type="text"  placeholder="Digite seu cpf" value={cpf} onChange={e => setCpf(e.target.value)} />
                    </div>
                    <div class="input-box">
                        <label for="email">Telefone</label>
                        <input  type="email"  placeholder="  (xx) xxxx-xxxx" value={telefone} onChange={e => setTelefone(e.target.value)}/>
                    </div>

                    <div class="input-box">
                        <label for="number">Criar senha</label>
                        <input type="tel" placeholder="Digite sua senha" value={senha} onChange={e => setSenha(e.target.value)}/>
                    </div>

                    <div class="input-box">
                        <label for="password">E-mail</label>
                        <input  type="password"  placeholder="Digite seu e-mail"  value={email} onChange={e => setEmail(e.target.value)}  />
                    </div>


                    <div class="input-box">
                        <label for="confirmPassword">Confirme sua Senha</label>
                        <input type="password"  placeholder="Digite sua senha novamente" value={confirmar} onChange={e => setConfirmar(e.target.value)}/>
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
                            <input id="none" type="radio" name="gender"/>
                            <label for="none">Prefiro não dizer</label>
                        </div>
                    </div>
                </div>

                <div class="continue-button">
                    <button onClick={salvarClick}>Continuar</button>
                </div>
          
        </div>
    </div>
        </main>
    )
}