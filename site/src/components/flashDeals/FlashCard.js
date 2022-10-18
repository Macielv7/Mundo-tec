import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { API_URL } from '../../api/config';
import './index.scss'

import { useNavigate } from 'react-router-dom'

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}

const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}

export default function  FlashCard  ( props )   {

    const navigate = useNavigate();
    
    function exibir(imagem) {
        if (!imagem)
            return `/logo.png`;
        else 
            return `${API_URL}/${imagem}`
    }

    


  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
  }

  return (
    <>
      <Slider {...settings}>
     
          return (
            <div className='box'>
              <div className='product mtop'>
                <div className='img'>
                  <span className='discount'>{props.item.desconto}% Off</span>
                  <img src={exibir(props.item.imagem)} alt='' />
                  <div className='product-like'>
                    <label>{count}</label> <br />
                    <i className='fa-regular fa-heart' onClick={increment}></i>
                  </div>
                </div>
                <div className='product-details'>
                  <h3>{props.item.produto}</h3>
                  <div className='rate'>
                    <s>{props.item.valorantigo}</s>
                  </div>
                  <div className='price'>
                    <h4>R${props.item.price}.00 </h4>
                   
                  </div>
                  <div className='price'>
                     
                    <button>
                      <i className=''></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
       
      </Slider>
    </>
  )
}
