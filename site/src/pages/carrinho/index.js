import './index.scss'

import { useEffect, useState } from 'react'
import Storage from 'local-storage'
import { buscarProdutoPorId } from '../../api/produtoAPI';
import CarrinhoCard from '../../components/carrinhoCard';
import EderecoCard from '../../components/ederecoCard';
import Header from "../../components/header"
import { useNavigate } from 'react-router-dom';

export default function Carrinho() {
    const [itens, setItens] = useState([]);


    const navigate = useNavigate();

    function irPedido() {
        navigate('/pedido')
    }



    function calcularValorTotal() {
        let total = 0;
        for (let item of itens) {
            total = total + item.produto.info.preco * item.qtd;
        }
        return total;
    }



    async function carregarCarrinho() {
        let carrinho = Storage('carrinho');
        if (carrinho) {

            let temp = [];
            
            for (let produto of carrinho) {
                let p = await buscarProdutoPorId(produto.id);
                
                temp.push({
                    produto: p,
                    qtd: produto.qtd
                })
            }

            setItens(temp);
        }

    }

    useEffect(() => {
        carregarCarrinho();
    }, [])


    return (
        <div className='pagina-carrinho'>
            <Header/>

            <h1> PRODUTO E FRETE </h1>

            <div className='pagina-pedido'>
          


            <div className='info'>
                <div>
                    <h2>SELECIONE O ENDEREÇO</h2>

                    <div className='enderecos'>

                        
                            <EderecoCard  />
                        
                    </div>

                    <button > Novo </button>

                </div>

                </div>
        </div>

            <div className='carrinho'>

                <div className='itens'>

                    {itens.map(item => 
                        <CarrinhoCard
                            item={item}
                            
                            carregarCarrinho={carregarCarrinho} />
                    )}

                </div>


                
                <div className='resumo'>
                    <h1> PREÇOS TOTAL   </h1>
                    <div className='total'>
                    <h3>  valor total: </h3>
                    <p> R$ {calcularValorTotal()} </p>
                    </div>

                    <button onClick={irPedido}> IR PARA PAGAMENTO </button>

                    <button onClick={irPedido}> CONTINUAR COMPRANDO </button>
                </div>
            </div>

            

        </div>
    )
}

