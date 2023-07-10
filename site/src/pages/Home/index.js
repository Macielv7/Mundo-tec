import "./index.scss"

import Header from "../../components/header"
import Notificacao from "../../components/notificacao"
import FlashCard from "../../components/flashCard/flas"
import Rodape from "../../components/rodape"

import { listarProdutosInicio } from '../../api/produtoAPI'
import { useEffect, useState } from 'react';


export default function Index() {

  const [produtos, setProdutos] = useState([]);

  async function listar() {
    const r = await listarProdutosInicio();
    setProdutos(r);
  }

  useEffect(() => {
    listar();
  }, [])


  return (
    <main className="home-inicio">

      <Notificacao />
      <Header />

      <div className="banner">
        <div className="container">
          <div className="slider-container has-scrollbar">
            <div className="slider-item">

              <img className=".banner-img" src="" />

              <div className="banner-content">
                <p className="banner-subtitle">Item De Tendência</p>
                <h2 className="banner-title">VENDA DE ÚLTIMA HORA NOTEBOOK</h2>
                <p className="banner-text">
                  a partir de R$ <b>2000</b>
                </p>

                <a href="#" className="banner-btn">Compre agora</a>
              </div>

            </div>
          </div>
        </div>
      </div>

      <FlashCard />

      <div className="banner-container">

        <div className="banner">
          <div className="shoe">
            <img src="./img/celular.png" alt="" />
          </div>
          <div className="content">
            <span>ATÉ</span>
            <h3>50% DE DESCONTO</h3>
            <p>OFERTA DA SEMANA</p>
            <a href="#" className="btn">Ver oferta</a>
          </div>
          <div className="women">
            <img src="./img/celular.png" alt="" />
          </div>
        </div>

      </div>

      <FlashCard />

      <div class="banner-container">

        <div class="banner">
          <img src="./img/celular.png" alt="/" />
          <div class="content">
            <span>OFERTA LIMITADA</span>
            <h3>ATÉ 50% off</h3>
            <a href="#" class="btn">Compre agora</a>
          </div>
        </div>

        <div class="banner">
          <img src="./img/celular.png" alt="" />
          <div class="content">
            <span>OFERTA LIMITADA</span>
            <h3>ATÉ 50% off</h3>
            <a href="#" class="btn">Compre agora</a>
          </div>
        </div>

      </div>

      <FlashCard />

      <FlashCard />

      <div className='bannner'>
        <div className='conntainer'>
          <div className='detail'>
            <h4>LATEST TECHNOLOGY ADDED</h4>
            <h3>Apple iPad preto moderno e barato</h3>
            <p>R$ 999</p>
            <a to='/product' className='linnk'>Shop Now  </a>
          </div>
          <div className='img_box'>
            <img src='./img/slider-img.png' alt='sliderimg'></img>
          </div>
        </div>
      </div>

<Rodape/>

    </main>
  )
}

