import Slider from "react-slick"
import "slick-carousel/slick/slick.scss"
import "slick-carousel/slick/slick-theme.scss"

import { API_URL } from '../../api/config';
import "./index.scss"

import { useNavigate } from 'react-router-dom'


export default function FlashCard(props) {

    const navigate = useNavigate();

    function exibir(imagem) {
        if (!imagem)
            return `/produto-padrao.png`;
        else
            return `${API_URL}/${imagem}`
    }


    function abrirDetalhes(id) {
        navigate('/tela/' + id + '/pedido')
    }

    return (

        <div className="f1">

            <Slider
                dots={false}
                infinite={true}
                speed={500}
                slidesToShow={4}
                slidesToScroll={1}
            >


                <div className='comp-card-produto' onClick={() => abrirDetalhes(props.item.id)}>
                    <img src={exibir(props.item.imagem)} alt="" />
                    <div>
                        <div> {props.item.departamento} </div>
                        <div> {props.item.produto} </div>
                        <div> R$ {props.item.preco} </div>
                    </div>
                </div>

                


            </Slider>

        </div>

    )

}
