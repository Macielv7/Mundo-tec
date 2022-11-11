import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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

        <div className="FlashCard">



                <div className='comp-card-produto' onClick={() => abrirDetalhes(props.item.id)}>
                    <img src={exibir(props.item.imagem)} alt="" />
                    <div>
                        <div> {props.item.departamento} </div>
                        <div> {props.item.produto} </div>
                        <div> R$ {props.item.preco} </div>
                    </div>
                </div>

            

        </div>

    )

}
