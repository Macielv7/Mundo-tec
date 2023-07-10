import React from "react"
import './index.scss'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { buscarProdutoPorId } from '../../api/produtoAPI';
import Storage from 'local-storage'

import Cart from "../cart/Cart";


import { BiCart, BiHeart, BiGroup, BiSearchAlt2, BiHomeAlt } from "react-icons/bi";

export default function Header() {

  const [openModal, setOpenModal] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const [itens, setItens] = useState([]);

  function qtdItens() {
    return itens.length;
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
    <main className="componts-header">
      <header>

        <div class="header-main">
          <div class="container">

            <Link to="/" class="header-logo">
              <h8>Mundo Tec</h8>
            </Link>

            <div class="header-search-container">
              <input type="search" name="search" class="search-field" placeholder="Procurar Produtos..." />

              <div class="search-btn">
                <zoom-in name="search-outline"></zoom-in>
              </div>
            </div>

            <div class="header-user-actions">

              <Link to="/login">
                <div class="action-btn" >
                  <BiGroup name="person-outline"></BiGroup>
                </div>
              </Link>

              <div class="action-btn">
                <BiHeart name="heart-outline"></BiHeart>
                <span class="count">0</span>
              </div>

              <div class="action-btn">
                <span
                  className="cart-icon"
                  onClick={() => {
                    setOpenModal(true)
                  }}
                >
                  <BiCart />
                  <span class="count">{qtdItens()}   itens</span>
                </span>
              </div>

              {openModal && <Cart OpenCart={setOpenModal} />}
            </div>
          </div>

        </div>
        {showCart && <Cart />}

        <div class="mobile-bottom-navigation">

          <button class="action-btn" data-mobile-menu-open-btn>
            <BiSearchAlt2 name="menu-outline"></BiSearchAlt2>
          </button>

          <button class="action-btn">
            <span
              className="cart-icon"
              onClick={() => setShowCart(true)}
            >
              <BiCart />

            </span>

          </button>

          <Link to="/">
            <button class="action-btn">
              <BiHomeAlt name="home-outline"></BiHomeAlt>
            </button>
          </Link>

          <button class="action-btn">
            <BiHeart name="heart-outline"></BiHeart>

            <span class="count">0</span>
          </button>

        </div>

      </header>
    </main>
  )
}
