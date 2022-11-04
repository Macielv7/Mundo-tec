import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import React, { useState } from "react"

import { API_URL } from '../../api/config';
import './index.scss'

import { useNavigate } from 'react-router-dom'

export default function FlashCard(props) {

    const navigate = useNavigate();

    function exibir(imagem) {
        if (!imagem)
            return `/logo.png`;
        else
            return `${API_URL}/${imagem}`
    }

    function abrirDetalhes(id) {
        navigate('/tela/' + id + '/pedido')
    }

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

                <div className='box'>
                    <div className='product mtop'>
                        <div className='img' onClick={() => abrirDetalhes(props.item.id)}>
                            <span className='discount'>90% Off</span>
                            <img src={exibir(props.item.imagem)} alt="" />
                            <div className='product-like'>
                                <label>{count}</label> <br />
                                <i className='fa-regular fa-heart' onClick={increment}></i>
                            </div>
                        </div>
                        <div className='product-details'>
                            <h3>{props.item.produto}</h3>

                            <div className='price'>R${props.item.preco}</div>
                            <div className='price'> <s>R${props.item.valorantigo}</s></div>

                            <button className="oo">
                                <i className='fa fa-plus'></i>
                            </button>
                        </div>

                    </div>
                </div>

            </Slider>
        </>
    )
}

