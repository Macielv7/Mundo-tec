import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Produto from "../../pages/adimin/cadastrarP"

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
const FlashCard = () => {

  const [produto, setProduto] = useState([]);

  const navigate = useNavigate();

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
  }

  return (
    <>
      <Slider {...settings}>
      {Produto.map((props) => {
          return (
            <div className='box'>
              <div className='product mtop'>
                <div className='img'>
                 
                  <img src="./img/logo.png" alt='' />
                 
                </div>
                <div className='product-details'>
                  <h3>{props.item.preco}</h3>
                 
                  <div className='price'>
                    <h4>${props.item.preco}.00 </h4>
                    
                    <button>
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

export default FlashCard