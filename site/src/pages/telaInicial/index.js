import './index.scss'


import EderecoCard from "../../components/ederecoCard"





export default function Pedido() {
   
   

    return (
        <div className='pagina-pedido'>
          


            <div className='info'>
                <div>
                    <h2>Endereços</h2>

                    <div className='enderecos'>

                        
                            <EderecoCard  />
                        
                    </div>

                    <button > Novo </button>

                </div>

                </div>
        </div>
    )
}

