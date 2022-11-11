import React from "react"
import './index.scss'

export default function Header() {

  return (
    <main className="componts-header">
      <section className='search'>

        <div className='containerr c_flex'>

          <div class="menu-lado">
            <input id="menu__toggle" type="checkbox" />
            <label class="menu__btn" for="menu__toggle">
              <span></span>
            </label>

            <ul class="menu__box">
              <li><a class="menu__item" href="/usuario1">Minha Conta</a></li>
              <li><a class="menu__item" href="#">Meu carrinho</a></li>
              <li><a class="menu__item" href="#">Favoritos</a></li>
              <hr />
              <li><a class="menu__item" href="#">Atendimento</a></li>
              <hr />
              <li><a class="menu__item" href="#">Destaques</a></li>
              <li><a class="menu__item" href="#">Lançamentos</a></li>
              <li><a class="menu__item" href="#">Oferta do dia</a></li>
            </ul>

          </div>

          <div className='logo width '>
            <a href="/">
              <img src="./img/logo.png" />
            </a>
          </div>

          <div className='search-boxx '>
            <i class="fa fa-user-circle-o" ></i>
            <input type='text' placeholder='Search and hit enter...' />

          </div>

          <div className='bt'>
            <a href="/loginusuario">
              <img src="/img/icons8-usuário-homem-com-círculo-24.png" />
            </a>
            <a href="/carrinho">
            <img src="/img/carri.png" />
            </a>
            <div className='cart'>

            </div>
          </div>




        </div>
      </section>
    </main>
  )
}
