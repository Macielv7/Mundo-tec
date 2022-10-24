import './index.scss'

import { useEffect, useState } from 'react'
import Storage from 'local-storage'
import { buscarProdutoPorId } from '../../api/produtoAPI';
import CarrinhoCard from '../../components/carrinhoCard';
import { useNavigate } from 'react-router-dom';

export default function Carrinho() {
    const [itens, setItens] = useState([]);


    async function carregarCarrinho() {
        let carrinho = Storage('carrinho');
        if (carrinho) {

            let temp = [];
            
            for (let produto of carrinho) {
                let info = await buscarProdutoPorId(produto.id);
                
                temp.push({
                    produto: info,
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

            <h1> Carrinho </h1>

            <div className='carrinho'>

                <div className='itens'>

                {itens.map(item =>
                       
                       <CarrinhoCard  
                       item={item}
                      
                      />
                       )}

                </div>

                
                <div className='resumo'>
                    <h1> PREÇOS TOTAL </h1>
                    <div className='total'>
                    <h3>total: </h3>
                    <p> R$ 9899 </p>
                    </div>

                    <button > IR PARA PAGAMENTO </button>

                    <button > CONTINUAR COMPRANDO </button>
                </div>


            </div>

        </div>
    )
}

