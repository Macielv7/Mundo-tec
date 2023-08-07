import { API_URL } from '../../api/config';
import './item.scss'

import { BiX } from "react-icons/bi";
import { useNavigate } from 'react-router-dom'
import Storage from 'local-storage'
import { useState } from 'react';

export default function CarrinhoItem({ item: { produto: { info, imagens }, qtd }, removerItem, carregarCarrinho }) {

    const [qtdProduto, setQtdProduto] = useState(qtd);

    const navigate = useNavigate();


    function abrirDetalhes(id) {
        navigate('/tela/' + id + '/pedido')
    }

    function remover() {
        removerItem(info.id);
    }

    function exibirImagem() {
        if (imagens.length > 0) {
            return API_URL + '/' + imagens[0];
        }
        else {
            return '/produto-padrao.png'
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
        <div className="cart-products" >
            <div
                className="search-result-item"
                key={info.id}
                onClick={() => { }}
            >
                
                <div className="image-container" onClick={() => abrirDetalhes()}>
                    <img
                        src={exibirImagem()}
                    />
                </div>
            
                <div className="prod-details"  onClick={() => abrirDetalhes()}>
                    <span className="name">{info.produto}</span>
                    <BiX
                        className="close-btn"
                        onClick={remover}
                    />

                    <div className="quantity-buttons">
                        <span>
                            -
                        </span>
                        <span >o</span>
                        <span>
                            +
                        </span>
                    </div>

                    <div className="text">
                        <span>{info.nomeDepartamento}</span>

                    </div>
                    <span className="highlight">
                        R$ {calcularSubtotal()}
                    </span>
                </div>
              
            </div>
        </div>
    );
};