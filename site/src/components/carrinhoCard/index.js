import { API_URL } from '../../api/config';
import './index.scss'

import Storage from 'local-storage'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

export default function CarrinhoCard(props) {
    


    return (
        <div className='comp-carrinho-item'>
            <div className='produto-container'>
                <div className='produto-box'>
                    <div className='imagens'>
                        <div className='atual'>
                            <img src="./img/notebook-asus-amd-ryzen-5-3500u-8gb-ram-ssd-256gb-15-6-radeon-vega-8-windows-11-home-cinza-m515da-br1213w_1651244602_m.jpg"/>
                        </div>
                    </div>
                    <div className='detalhes'>
                        <div className='nome'> {props.item.produto.preco} </div>
                        <div className='departamento'> </div>

                        <div className='i'></div>
                        <div className='preco-label'> PREÇO </div>
                        <div className='preco'> R$  </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

