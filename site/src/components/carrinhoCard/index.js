import { API_URL } from '../../api/config';
import './index.scss'

import Storage from 'local-storage'
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

    function remover() {
        removerItem(info.id);
    }

    function calcularSubtotal() {
        const subtotal = qtdProduto * info.preco;
        return subtotal;
    }


    return (
        <main>
            <div className='comp-carrinho-item'>
                <div className='produto-container'>
                    <div className='produto-box'>
                        <div className='imagens'>
                            <div className='atual'>
                                <img src={exibirImagem()} />
                            </div>
                        </div>
                        <div className='detalhes'>
                            <div className='departamento'> {info.nomeDepartamento} </div>
                            <div className='nome'> {info.produto} </div>

                            <div className='preco-label'> PREÇO </div>
                            <div className='preco'> R$ {info.preco} </div>
                        </div>
                    </div>
                    <div className='qtd-box'>
                        <div className='excluir' onClick={remover}>
                            excluir
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

