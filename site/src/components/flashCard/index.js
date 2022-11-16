
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { listarProdutosInicio } from '../../api/produtoAPI'
import { API_URL } from '../../api/config';
import './index.scss'
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
            return `/produto-padrao.png`;
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
                                <span className='discount'>{item.desconto} Off</span>
                                <img src={exibir(item.imagem)} alt="" />

                            </div>
                            <div className='product-details'>
                                <h5>{item.marca} </h5>
                                <h3>{item.produto} </h3>
                                <h9><s>R${item.valorantigo}</s></h9>
                                <div className='price'>
                                
                                    <h4>R${item.preco}</h4>

                                   
                                </div>
                            </div>
                             <button >
                           
                                        <h11>Comprar</h11>
                                    </button>
                        </div>
 </div>
                )}
            </Slider>

        </div>


    )

}
