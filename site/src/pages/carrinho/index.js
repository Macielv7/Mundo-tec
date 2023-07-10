import './index.scss'

import { useEffect, useState } from 'react'
import { API_URL } from '../../api/config'
import Storage from 'local-storage'
import { buscarProdutoPorId } from '../../api/produtoAPI';
import { listar } from '../../api/usuario'
import CarrinhoCard from '../../components/carrinhoCard';
import EderecoCard from '../../components/ederecoCard';
import ExibirEnderecos from '../../components/exibirEnderecos';
import Header from "../../components/header"
import { useNavigate } from 'react-router-dom';



export default function Carrinho() {
    const [itens, setItens] = useState([]);
    const [enderecos, setEnderecos] = useState([]);
    const [exibirEndereco, setExibirEndereco] = useState(false);


    const navigate = useNavigate();

    function irPedido() {
        navigate('/pagamento')
    }

    function irPedidooo() {
        navigate('/')
    }

    function removerItem(id) {
        let carrinho = Storage('carrinho');
        carrinho = carrinho.filter(item => item.id != id);

        Storage('carrinho', carrinho);
        carregarCarrinho();
    }

    async function carregarEnderecos() {
        const id = Storage('cliente-logado').id;
        const r = await listar(id);
        setEnderecos(r);
    }


    function exibirNovoEndereco() {
        setExibirEndereco(true);
    }

    function fecharNovoEndereco() {
        setExibirEndereco(false);
        carregarEnderecos();
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
        carregarEnderecos();

    }, [])


    return (
        <main class="containerrr">
            <Header/>
 
            <div className='pagina-carrinho'>
            <div>
                    <h2>Endereços</h2>

                    <div className='enderecos'>

                        
                            <EderecoCard  />
                      
                    </div>

                    <button onClick={exibirNovoEndereco}> Novo </button>

                </div>

<h1> Carrinho </h1>

<div className='carrinho'>

    <div className='itens'>

        {itens.map(item => 
            <CarrinhoCard
                item={item}
                removerItem={removerItem}
                carregarCarrinho={carregarCarrinho} />
        )}

    </div>

    
    <div className='resumo'>
        <h1> Subtotal </h1>
       
        <p> R$ {calcularValorTotal()} </p>
        <button onClick={irPedido}> Fechar Pedido </button>
    </div>


</div>

</div>
  </main>


    )
}

