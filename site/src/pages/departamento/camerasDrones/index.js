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
        <main className='page page-consultar'>
            <Header/> 
            <div className='container'>
                
                
                <div className='conteudo'>

                    <div className='caixa-busca'>
                        
                    
                      
                    </div>
                    


                    <div className='card-container'>


                        <div className='comp-card'>
                                    <div className='card'>
                                    <div className='acoes'>

                                        
                                        
                                    </div>
                                    {ge.map(item =>
                                    <div>
                                       
                                        <img className='capas' src={exibir(item.imagem)}/>      
                                      
                                        
                                        
                                        <div className='nomee'>{item.produto} </div>

                                        <div className='antigo'>{item.preco}</div>
                                        <div className='precoo'>{item.proco}</div>

                                        <button className='b'> </button>
                                    </div>
                                    )}
                                    </div>
                        </div>
                    </div>  
                </div>
            </div>
        </main>
    )
}

        
       
      
    
