import './index.scss'

import Header from "../../components/header"

import Storage from 'local-storage'
import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'


import { buscarProdutoPorId } from '../../api/produtoAPI'
import { API_URL } from '../../api/config'
import { salvarNovoPedido } from '../../api/pedido'
import { toast } from 'react-toastify'

export default function Index() {

    const [itens, setItens] = useState([]);

    function calcularValorTotal() {
        let total = 0;
        for (let item of itens) {
            total = total + item.produto.info.preco * item.qtd;
        }
        return total;
    }

   



    return (
        <main className='tela-pagamento'>
            <Header />
            <div className='pagina-pedido'>



                <div className='pedido-box'>
                    <h1> Pedido </h1>
                </div>


               <div>
                R$ {calcularValorTotal()}
               </div>
                

            </div>
        </main >
    )
}