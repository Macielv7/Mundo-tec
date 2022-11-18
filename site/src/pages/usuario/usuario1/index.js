
import Header from "../../../components/header"
import Barra from "../../../components/barra"
import  EderecoCard from "../../../components/ederecoCard"
import { listarUsuario } from "../../../api/usuario"
import './index.scss'
import { listar } from '../../../api/usuario'
import { useEffect, useState } from 'react'
import Storage, { set } from 'local-storage'

export default function Index() {
    const [usuario, setUsuario] = useState([])
    const [itens, setItens] = useState([]);
    const [enderecos, setEnderecos] = useState([]);

   

    async function carregarUsuario() {
        const id = Storage('usuario-logado').id
        const resp = await listarUsuario(id);
        setUsuario(resp);
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
        <div className='usu1'>
           <Header/>
           <Barra/>
            <div className='mae'>
            
                <div className='retangulo'>
               
                    <img src='./img/5087579.png' className='circo'/>
                    <h3>Bem-vindo,  {usuario.email} <br/><span>macielvinicius@gmail.com</span></h3>
                
                    <a href='#'>
                    <img src="./img/icons8-engrenagem-24.png" className='' />
                    </a>
                   
                </div>
               
                <div >
                    <h6 className='fonte'>RESUMO DO SEU ÚLTIMO PEDIDO</h6>
                </div>

                <div className='geral-mom'>

                    <div className='numero'>
                        <p className='title'> NÚMERO DO PEDIDO </p>
                        <p className='desc'> #30432868 </p>
                    </div>


                    <div className='status'>
                        <p className='title'>STATUS</p>
                        <p className='desc'>Cancelado </p>
                    </div>

                    <div className='data'>
                        <p className='title'>DATA</p>
                        <p className='desc'>09/11/2022</p>
                    </div>

                    <div className='pagamento'>
                        <p className='title'>PAGAMENTO</p>
                        <p className='desc'>Cartao</p>
                    </div>


                </div>
               <hr/>
                <div className='geral-momm'>

                    <div className='ender'>
                        <p className='title'> ENDERECO </p>

                        {enderecos.map(item =>
            <div>
                <div className='end'>{item.rua}, {item.numero} - {item.complemento}</div>
                <div className='cep'> {item.cep}- {item.bairro}, {item.cidade}/{item.estado}</div>
            </div>
            )}

                    </div>
                </div>


            </div>
        </div>
    )
}