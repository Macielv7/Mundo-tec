
import './index.scss'



export default function Index() {

    

    return (
        <main className='page page-consultar'>
            
            <div className='container'>
                
                
                <div className='conteudo'>

                    <div className='caixa-busca'>
                        
                    <input type="text" placeholder='Buscar Produto por nome'  />
                        <img src='/img/icons8-remover-24.png'  />
                      
                    </div>
                    


                    <div className='card-container'>


                        <div className='comp-card'>

                          
                               
                                    <div className='card'>
                                    <div className='acoes'>

                                        <img src='/img/icons8-lápis-64.png'  /> 
                                        <img src='/img/icons8-remover-24.png'  />
                                        
                                    </div>
                                    <div>
                                       
                                        <img className='capas' src="./img/notebook-asus-amd-ryzen-5-3500u-8gb-ram-ssd-256gb-15-6-radeon-vega-8-windows-11-home-cinza-m515da-br1213w_1651244602_m.jpg"/>      
                                      
                                        
                                        
                                        <div className='nomee'>Notebook Lenovo Ultrafino IdeaPad 3i Intel Core i3-10110U, 4GB... </div>

                                        <div className='antigo'>R$ 2.499,99</div>
                                        <div className='precoo'>R$ 2.499,99</div>

                                        <button className='b'> </button>
                                    </div>
                                    
                                    </div>
                            
                          
                        </div>
                    </div>  
                </div>
            </div>
        </main>
    )
}