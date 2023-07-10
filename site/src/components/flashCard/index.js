
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { listarProdutosInicio } from '../../api/produtoAPI'
import { IoIosUndo, IoIosShareAlt, IoMdHeartEmpty } from 'react-icons/io'
import { API_URL } from '../../api/config';
import './index.scss'

import { BiX } from "react-icons/bi";

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'



export default function FlashCard() {

    const [produtos, setProdutos] = useState([]);


    const navigate = useNavigate();

    async function listar() {
        const r = await listarProdutosInicio();
        setProdutos(r);
    }



    function exibir(imagem) {
        if (!imagem)
            return `./img/logo.png`;
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
                    <IoIosShareAlt className='icon' />
                </button>
            </div>
        )
    }
    const SamplePrevArrow = (props) => {
        const { onClick } = props
        return (
            <div className='control-btn' onClick={onClick}>
                <button className='prev'>
                    <IoIosUndo className='icon' />
                </button>
            </div>
        )
    }

    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }



    useEffect(() => {
        listar();
    }, [])


    return (


        <div className="FlashCarrd">

            <Slider
                dots={false}
                infinite={true}
                speed={500}
                slidesToShow={4}
                slidesToScroll={1}
                autoplay={true}
                nextArrow={<SampleNextArrow />}
                prevArrow={<SamplePrevArrow />}

            >
                {produtos.map(item =>

                    <div className='box'>

                        <div className='product mtop' onClick={() => abrirDetalhes(item.id)}>
                            <div className='img'>
                                <span className='discount'>50% Off</span>
                                <img src={exibir(item.imagem)} alt="" />
                                <div className='product-like'>
                                    <IoMdHeartEmpty IoMdHeartEmpty onClick={increment}></IoMdHeartEmpty>

                                </div>


                            </div>
                            <div className='product-details'>
                                <h5>{item.marca} </h5>
                                <h3>{item.produto} </h3>
                                <h9><s>R$ {item.valorantigo}</s></h9>
                                <div className='price'>

                                    <h4>R$ {item.preco}</h4>


                                </div>
                            </div>
                            <button>
                                <div class="svg-wrapper-1">
                                    <div class="svg-wrapper">
                                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                          <span>
                                          <BiX/>
                                          </span>
                                        </svg>
                                    </div>
                                </div>
                                <span>Comprar</span>
                            </button>
                        </div>
                    </div>
                )}
            </Slider>

        </div>


    )

}
