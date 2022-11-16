import './index.scss'
import Header from "../../../components/header"
import {useParams} from 'react-router-dom'
import { buscardepartamento, } from '../../../api/produtoAPI'
import { API_URL } from '../../../api/config';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Index() {

  const [produtos, setProdutos] = useState([]);
  const [departamento, setDepartamento] = useState([]);
  const [buscar,setBuscar] = useState ('')
  const [ge,setGe] = useState ([])

  const {idParam} = useParams();

  async function carregarDepartamento(){
    const resp = await buscardepartamento(idParam)
    setGe(resp)
}

const navigate = useNavigate();

  useEffect(() => {
        
        carregarDepartamento();
    }, [])


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
      <main className='tela-departamento'>

        <Header/> 

        <div className='departa'>
            
          <div className='cont'>
            <h1>Periféricos</h1>
          </div>

          <div className='ordenar'>

          {ge.map(item =>

<div className='box'>
    
    <div className='product mtop' onClick={() => abrirDetalhes(item.id)} >
        <div className='img'>
            <span className='discount'>{item.desconto} Off</span>
            <img src={exibir(item.imagem)} alt="" />

        </div>
        <div className='product-details'>
            <h5>{item.departamento} </h5>
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
            
          </div>
        </div>
        </main>
    )
}