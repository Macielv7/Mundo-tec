import React from "react"
import './index.scss'
import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {

 
 


  return (
    <>
      <section className='search'>

     


        <div className='containerr c_flex'>

        <div class="hamburger-menu">
              <input id="menu__toggle" type="checkbox" />
              <label class="menu__btn" for="menu__toggle">
                <span></span>
              </label>

              <ul class="menu__box">
                <li><a class="menu__item"  href="/LoginUsuario">Minha Conta</a></li>
                <li><a class="menu__item" href="/CadastroUsuario">Meu carrinho</a></li>
                <li><a class="menu__item" href="/LoginAdm">Favoritos</a></li>
                                          <hr/>
                <li><a class="menu__item" href="/LoginUsuario">Atendimento</a></li>
                <hr/>
                <li><a class="menu__item" href="/CadastroUsuario">Destaques</a></li>
                <li><a class="menu__item" href="/LoginAdm">Lançamentos</a></li>
                <li><a class="menu__item" href="/LoginAdm">Oferta do dia</a></li>
              </ul>

          </div>

          <div className='logo width '>
            <a href="/">
            <img src="./img/logo.png" />
            </a>
          </div>

          <div className='search-boxx f_flex'>
          <i class="fa fa-user-circle-o" ></i>
            <input type='text' placeholder='Search and hit enter...' />
            
          </div>

          <div className='icon f_flex width'>
          <a href="/criarconta">
            <img src="/img/icons8-usuário-homem-com-círculo-24.png" />
            </a>
            <div className='cart'>
            
            </div>
          </div>

   
         
        </div>
      </section>
    </>
  )
}

export default Search
