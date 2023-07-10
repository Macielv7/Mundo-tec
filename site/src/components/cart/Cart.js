
import { BiX } from "react-icons/bi";

import Storage from 'local-storage'
import { buscarProdutoPorId } from '../../api/produtoAPI';
import CarrinhoItem from '../cardItem'

import "./Cart.scss";
import { useState, useEffect } from "react";

import { useNavigate } from 'react-router-dom';

export default function Cart({ OpenCart }) {


    const [itens, setItens] = useState([]);


    const navigate = useNavigate();

    function irPedido() {
        navigate('/carrinho')
    }


    function calcularValorTotal() {
        let total = 0;
        for (let item of itens) {
            total = total + item.produto.info.preco * item.qtd;
        }
        return total;
    }


    function removerItem(id) {
        let carrinho = Storage('carrinho');
        carrinho = carrinho.filter(item => item.id != id);

        Storage('carrinho', carrinho);
        carregarCarrinho();
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
        <div className="cart-panel">
            <div
                className="opac-layer"
                onClick={() => OpenCart(false)}
            ></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Carrinho</span>


                    <span
                        className="close-btn"
                        onClick={() => OpenCart(false)}
                    >
                        <BiX className="close-btn" />
                        <span className="text">Fecha</span>

                    </span>
                </div>


                {!itens.length && (
                    <div className="empty-cart">
                        <BiX/>
                        <span>Nenhum produto no carrinho.</span>
                        <button className="return-cta" onClick={() => {}}>
                            VOLTAR A LOJA
                        </button>
                    </div>
                )}


                <>
                    {itens.map(item =>
                        <CarrinhoItem
                            item={item}
                            removerItem={removerItem}
                            carregarCarrinho={carregarCarrinho} />
                    )}

                    {!!itens.length && (
                    <>

                        <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text">Subtotal:</span>
                            <span className="text total">
                                R$ {calcularValorTotal()}
                            </span>
                        </div>
                        <div className="button">
                            <button
                                className="checkout-cta"
                                onClick={irPedido}
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                    </>
                )}

                </>

            </div>
        </div>
    );
};

