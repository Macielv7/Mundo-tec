
import axios  from 'axios'
import {useEffect, useState} from 'react'
import {useHref, useNavigate, useParams} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { cadastrorUsuario, loginUsuario } from '../../api/usuario';
import Storage from 'local-storage'
import "./index.scss"

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


  
      async function salvarClick(){
        try{      
            const r = await cadastrorUsuario (nome, cpf,  genero, email, telefone, senha, confirmar)
            Storage('usuario-logado', r)
            navigate('/loginusuario');
        }
        catch (err){
            toast.error(err.response.data.erro)
        }
        
        
    }


    return(
        <main className="Cadastrarusu">
         
            <div className="container">
            <ToastContainer/>
        <div className="f">
          
                <div className="form-header">
                    <div className="title">
                        <h1>Faça o seu Cadastro</h1>
                        <p>Preencha os campos para podermos realizar o cadastro</p>
                    </div>
                   
                </div>

                <div className="input-group">
                    <div className="input-box">
                        <label for="firstname">Primeiro Nome</label>
                        <input  type="text"  placeholder="Digite seu primeiro nome" value={nome} onChange={e => setNome(e.target.value)}/>
                    </div>

                    <div className="input-box">
                        <label for="lastname">cpf</label>
                        <input type="text"  placeholder="Digite seu cpf" value={cpf} onChange={e => setCpf(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <label for="email">Telefone</label>
                        <input  type="email"  placeholder="  (xx) xxxx-xxxx" value={telefone} onChange={e => setTelefone(e.target.value)}/>
                    </div>

                    <div className="input-box">
                        <label for="number">Criar senha</label>
                        <input type="tel" placeholder="Digite sua senha" value={senha} onChange={e => setSenha(e.target.value)}/>
                    </div>

                    <div className="input-box">
                        <label for="password">E-mail</label>
                        <input    placeholder="Digite seu e-mail"  value={email} onChange={e => setEmail(e.target.value)}  />
                    </div>


                    <div className="input-box">
                        <label for="confirmPassword">Confirme sua Senha</label>
                        <input   placeholder="Digite sua senha novamente" value={confirmar} onChange={e => setConfirmar(e.target.value)}/>
                    </div>

                </div>

                <div className="gender-inputs">
                    <div className="gender-title">
                        <h6>Gênero</h6>
                    </div>

                    <div className="gender-group">
                        <div className="gender-input">
                            <input id="female" type="radio" name="gender" value={genero} onChange={e => setGenero(e.target.value)}/>
                            <label for="female">Feminino</label>
                        </div>

                        <div className="gender-input">
                            <input id="male" type="radio" name="gender"value={genero} onChange={e => setGenero(e.target.value)}/>
                            <label for="male">Masculino</label>
                        </div>

                        <div className="gender-input">
                            <input id="none" type="radio" name="gender"value={genero} onChange={e => setGenero(e.target.value)}/>
                            <label for="none">Prefiro não dizer</label>
                        </div>
                    </div>
                </div>

                <div className="continue-button">
                    <button onClick={salvarClick}>Continuar</button>
                </div>
          
        </div>
    </div>
        </main>
    )
}