import { logar, login } from '../../api/usuario';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss'
import Storage from 'local-storage'
import Header from "../../components/header"


export default function Login() {


    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const navigate = useNavigate();


    async function loginClick() {

        try {
            const r = await logar(email, senha)
            Storage('usuario-logado', r)
            navigate('/');

        }

        catch (err) {
            if (err.response.status === 401) {
                setErro(err.response.data.erro)
            }
        }
    }

    useEffect(()=>{
        if(Storage('usuario-logado'));
            navigate('/login')
      }, []);


    return (
        <main className='page-login-usu'>
            <Header xxx />

            <div className="coontainerr">
                
                <div className="login-content">
                    <div action="index.html" classNameName='form'>
                        <h2 className="title">Login</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <input type="text" className="input" value={email} onChange={e => setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <input type="password" className="input" value={senha} onChange={e => setSenha(e.target.value)}/>
                            </div>
                        </div>
                        <a href="/criarconta">Esqueceu a senha?</a>
                        <input type="submit" className="btn" onClick={loginClick} />
                        <div>{erro}</div>
                    </div>
                </div>
            </div>


        </main>
    )
}