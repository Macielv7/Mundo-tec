import './index.scss'
import { API_URL } from '../../api/config'

import { useNavigate } from 'react-router-dom'

export default function FlashCard(props) {

    const navigate = useNavigate();

    function exibir(imagem) {
        if (!imagem)
            return;
        else 
            return `${API_URL}/${imagem}`
    }

   

    function abrirDetalhes(id) {
        navigate('/produto/' + id + '/detalhe')
    }

    return (
        <div className='comp-card-produto' onClick={() => abrirDetalhes(props.item.id)}>
            <img src={`${API_URL}/${props.item.imagem}`} alt="" />
            <div>
                
                <div> {props.item.marca} </div>
                <div> {props.item.produto} </div>
                <div> {props.item.valorantigo} </div>
                <div> R$ {props.item.preco} </div>
            </div>
        </div>
    )
}

