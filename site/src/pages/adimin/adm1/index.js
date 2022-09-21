
import Menu from '../../../components/menu'
import './index.scss'



export default function Index() {
    return (
        
        <main className='page page-cadastrar'>
            <Menu/>
            
            <div className='container'>
                     
                <div className='conteudo'>
                    <section>
                        <h1 className='titulo'><span>&nbsp;</span> Cadastrar Novo Produto</h1>

                        <div className='form-colums'>
                            <div>
                                <div className='upload-capa'>
                                    
                                <img src='./img/icons8-add-image-64.png'/>
                                
                                   
                                    <input type='file' id='imagemCapa'  />
                                </div>
                            </div>
                            <div>
                                <div className='form-row'>
                                    <label>Nome:</label>
                                    <input type='text' placeholder='Nome do filme'  />
                                </div>
                                <div className='form-row'>
                                    <label>Avaliação:</label>
                                    <input type='number' placeholder='0'  />
                                </div>
                                <div className='form-row'>
                                    <label>Lançamento:</label>
                                    <input type='date'  />
                                </div>
                                <br />
                                <div className='form-row'>
                                    <label></label>
                                    <input type='checkbox'  /> 
                                </div>
                            </div>
                            <div>
                                <div className='form-row' style={{alignItems: 'flex-start'}}>
                                    <label style={{marginTop: '13px'}}></label>
                                    
                                </div>
                                <br />
                                <br />
                                <div className='form-row'>
                                    <label></label>
                                    <div className='btnSalvar'>
                                        <button> </button> 
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

