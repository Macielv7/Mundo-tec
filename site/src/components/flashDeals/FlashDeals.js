import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../api/config';


export default function FlashCard  ()  {

    const navigate = useNavigate();

    function exibir(imagem) {
        if (!imagem)
            return `/produto-padrao.png`;
        else 
            return `${API_URL}/${imagem}`
    }



  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  
  }

  return (
    <>
      <Slider {...settings}>
      {FlashCard.map((props) => {
          return (
            <div className='box'>
              <div className='product mtop'>
                <div className='img'>
                  
                  <img src={exibir(props.item.imagem)} alt='' />
                  
                </div>
                <div className='product-details'>
                  <h3>{props.item.produto}</h3>
                  
                  <div className='price'>
                    <h4>${props.item.preco}.00 </h4>
                  
                    <button >
                      <i className='fa fa-plus'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}
