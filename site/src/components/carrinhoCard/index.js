import { API_URL } from '../../api/config';
import './index.scss'

import Storage from 'local-storage'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

export default function CarrinhoCard({ item: { produto: { info, imagens }, qtd }, removerItem, carregarCarrinho }) {
    const [qtdProduto, setQtdProduto] = useState(qtd);


    function exibirImagem() {
        if (imagens.length > 0) {
            return API_URL + '/' + imagens[0]; 
        }
        else {
            return './img/logo.png'
        }
    }

    function calcularSubtotal() {
        const subtotal = qtdProduto * info.preco;
        return subtotal;
    }

    function alterarQuantidade(novaQtd) {
        setQtdProduto(novaQtd);
        
        let carrinho = Storage('carrinho');
        let itemStorage = carrinho.find(item => item.id == info.id);
        itemStorage.qtd = novaQtd;

        Storage('carrinho', carrinho);
        carregarCarrinho();
    }



    return (
        <div className='comp-carrinho-item'>
            <div className='produto-container'>
                <div className='produto-box'>
                    <div className='imagens'>
                        <div className='atual'>
                            <img src= {exibirImagem()} />
                        </div>
                    </div>
                    <div className='detalhes'>
                        <div className='nome'> {info.produto} </div>
                        <div className='departamento'> {info.nomeDepartamento} </div>

                    </div>
                </div>
                <div className='qtd-box'>
                   <div className='i'></div>
                    <div className='subtotal'>
                        
                        <div>R$  {calcularSubtotal()}</div>
                        <div>(A vista no PIX)</div>

                    </div>
                   
                </div>
            </div>
        </div>
    )
}

