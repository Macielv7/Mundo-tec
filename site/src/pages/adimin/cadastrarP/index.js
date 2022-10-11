import { buscarImagem } from '../../../api/produtoAPI.js'
import Menu from "../../../components/menu"
import './index.scss'


export default function Index(props) {
    return (
        <main className='page page-consultar'>
            <Menu/>
            <div className='container'>
               
                
                <div className='conteudo'>

                    <div className='caixa-busca'>
                        <input type="text" placeholder='Buscar produtos por nome' />
                        <img src='/img/icon-buscar.svg' alt='buscar' />
                    </div>
                    


                    <div className='card-container'>


                        <div className='comp-card'>
                            <div className='card'>
                                <div className='acoes'>

                                    <img src='/img/' alt='editar' />
                                    
                                    <img src='/img/icons8-remover-24.png' alt='remover' />
                                    
                                </div>
                                <div>
                                <img src={buscarImagem(props.produto.imagem)} alt='' />
                                <h1> {props.produto.nome} </h1>
                                    <s className='lancamento'>{props.valorantigo.preco && props.produto.valorantigo.substr(0, 10)}</s>
                                </div>
                                <div>
                                    <div className='avaliacao'>{props.produto.preco}</div>
                                    <button className='disponivel'>Adicionar</button>
                                </div>
                            </div>

                            
                        </div>

                        
                        
                    </div>


                    
                </div>
            </div>
        </main>
    )
}