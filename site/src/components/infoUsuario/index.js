import './index.scss'
import Header from "../header"

export default function InfoUsuario() {

    return (
        <div className='comp-modal-usuario'>
            <Header/>
            <div className="modal-usuario ">
                <div className='conteudo'>
                    <h1> Dados basicos </h1>

                    <div className='fff'>

                        <div>
                            <label> &nbsp; </label>
                        </div>
                        <div>
                            <label>  </label>
                            <input type='text'/>
                        </div>
                        <div>
                            <label>  </label>
                            <input type='text' />
                        </div>
                        <div>
                            <label>  </label>
                            <input type='text'  />
                        </div>
                        <div>
                            <label>  </label>
                            <input type='text'  />
                        </div>
                        <div>
                            <label> &nbsp; </label>
                        </div>

                        <div className="usu-inputs">
                            <div className="usu-title">
                                <h6>Gênero</h6>
                            </div>

                            <div className="usu-group">
                                <div className="usu-input">
                                    <input id="female" type="radio" name="usu" />
                                    <label for="female">Feminino</label>
                                </div>

                                <div className="usu-input">
                                    <input id="male" type="radio" name="usu" />
                                    <label for="male">Masculino</label>
                                </div>

                                <div className="usu-input">
                                    <input id="none" type="radio" name="usu" />
                                    <label for="none">Prefiro não dizer</label>
                                </div>
                            </div>
                            <input  type="checkbox"  /><span>Quero receber ofertas e novidades por e-mail</span>
                          
                        </div>

                        <div>
                            <label></label>
                            <div className='btn'>
                                <button > Salvar </button>
                            </div>
                        </div>

                        
                    </div>

                     <div>
                            <label> &nbsp; </label>
                        </div>
                        <div>
                            <label>  </label>
                            <input type='text'/>
                        </div>
                        <div>
                            <label>  </label>
                            <input type='text' />
                        </div>
                        <div>
                            <label>  </label>
                            <input type='text'  />
                        </div>
                </div>


            </div>
        </div>
    )
}