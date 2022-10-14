import { API_URL } from '../../api/config';
import Menu from '../../components/menu'
import { confirmAlert } from 'react-confirm-alert'
import { listaArtista,  BuscarArtistaPorNome, removerProduto } from '../../../api/produtoAPI.js';
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-confirm-alert/src/react-confirm-alert.css'
import storage from 'local-storage'
import './index.scss'



export default function Index() {

    const [nome, setNome] = useState ([])
    const [filtro, setFiltro] = useState ('')
    const navigate = useNavigate();

    function editarProduto(id){
        navigate(`/adm/cadastrarPoduto/alterar/${id}`)
    }


    async function carregarProduto(){
        const resp = await listaProduto();
        setNome(resp);
    }

    

    useEffect(() => {
        if(!storage('usuario-logado')){
            navigate('/LoginAdm')
        }
        carregarProduto();
    }, [])

    async function filtrar(){
        const resp = await BuscarProdutoPorNome(filtro);
        setNome(resp);
    }

   

    async function removerProduto (id, nome){

        confirmAlert({
            title: 'Remover Produto',
            message: `deseja remover o Produto ${id, nome}?`,
            buttons: [
                {
                    label:'sim',
                    onClick: async () => {
                        const filtro = await removerProduto (id,nome);
                          if(filtro === ''){
                         carregarProduto();
                      }
                          else
                          filtrar();
                          toast.dark('Produto removido')
                    }
                },
                {
                    label:'Não'
                }
            ]
        })

        
    }



    return (
        <main className='page page-consultar'>
            <Menu />
            <ToastContainer/>
            <div className='container'>
                
                
                <div className='conteudo'>

                    <div className='caixa-busca'>
                        
                        <input type="text" placeholder='Buscar Produto por nome' value={filtro} onChange={e => setFiltro(e.target.value)} />
                        <img src='/images/procurar.png'  onClick={filtrar}/>
                    </div>
                    


                    <div className='card-container'>


                        <div className='comp-card'>

                            {nome.map(item => {
                            return (
                               
                                    <div className='card'>
                                    <div className='acoes'>

                                        <img src='/images/botao-editar.png' onClick={() => editarProduto (item.id)} /> 
                                        <img src='/images/excluir.png' onClick={() => removerProduto(item.id, item.nome) } />
                                        
                                        
                                    </div>
                                    <div>
                                       
                                        <img className='capas' src={`${API_URL}/${item.produto}`}/>      
                                      
                                        
                                        <div className='id'>{item.id} </div>
                                        <div className='artista'>{item.nome} </div>

                                        <div className='genero'>{item.preco}</div>
                                    </div>
                                    
                                    </div>
                            );
                            })} 
                        </div>
                    </div>  
                </div>
            </div>
        </main>
    )
}