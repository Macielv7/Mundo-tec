
import Header from "../../../components/header"
import Barra from "../../../components/barra"
import  EderecoCard from "../../../components/ederecoCard"

import './index.scss'


import { listar } from '../../../api/usuario'
import { ToastContainer, toast } from 'react-toastify';

import { API_URL } from '../../../api/config'
import { useEffect, useState } from 'react'
import { buscarUsuarioPorId, listarUsuario, enviarImagemUsuario } from '../../../api/usuario'
import { useNavigate, useParams } from 'react-router-dom'
import Storage from 'local-storage'



export default function Index() {

    const [usuario, setUsuario] = useState([])
    const [enderecos, setEnderecos] = useState([])
    const [imagem, setImagem] = useState('')
    

    const {idParam} = useParams()
   const  navigate = useNavigate ()

    function sairClick(){
        Storage.remove('usuario-logado')
        navigate('/LoginUsuario')
    }

    async function carregarUsuario() {
        const id = Storage('usuario-logado').id
        const resp = await buscarUsuarioPorId(id);
        setUsuario(resp);
    }

   
    function mostrarImagem(imagem) {

        if (typeof (imagem) == 'object') {
            return URL.createObjectURL(imagem);
        }
        else {
            return `${API_URL}/${imagem}`
        }
    }

    function escolherImagem() {
        document.getElementById('imagemCapa').click();
    }

    async function salvarImagem(){
        try {
            
            if(typeof(imagem) == 'object'){
                await enviarImagemUsuario(idParam, imagem)
                
            }

            toast.success('trocastes a foto, querido usuario do fitas br')
        
        } catch (err) {
            if(err.response)
            toast.error(err.response.data.erro)
            else
            toast.error(err.message);
        }

    }

       async function carregarEnderecos() {
        const id = Storage('usuario-logado').id;
        const r = await listar(id);
        setEnderecos(r);
    }



    useEffect(() => {
        carregarEnderecos();
        carregarUsuario();
         
    }, [])


    return (
        <main className="usu2">
            
        <Header/>
        <div class="cards">
       
        <div class="card shop">
            <div class="icon">
            <h3>Meu dados</h3>
           
            </div>
            
             nome
           <div>{usuario.nome}</div>
           

           
             <div>email:  {usuario.email}</div>
             
             
             <div>cpf:  {usuario.cpf}</div>
             
            
             <div> genero:  {usuario.genero}</div>
             
             
             <div>telefone:  {usuario.telefone}</div>
             
             
         
             
            <button>Salva</button>
        </div>
        <div class="card about">
            <div class="icon">
            <h3>Endereco</h3>
            </div>
       
            {enderecos.map(item =>
            <div>
                <div className='end'>{item.rua}, {item.numero} - {item.complemento}</div>
                <div className='cep'> {item.cep}- {item.bairro}, {item.cidade}/{item.estado}</div>
            </div>
            )}
            <button>Novo endereco</button>
        </div>
    </div>
</main>


    )
}