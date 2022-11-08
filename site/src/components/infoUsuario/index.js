import './index.scss'


export default function InfoUsuario() {

    return (
        <div className='comp-modal-endereco'>
            <div className="modal-endereco ">
                <div className='conteudo'>
                    <h1> Dados basicos </h1>

                    <div className='form'>

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

                        <div className="gender-inputs">
                            <div className="gender-title">
                                <h6>Gênero</h6>
                            </div>

                            <div className="gender-group">
                                <div className="gender-input">
                                    <input id="female" type="radio" name="gender" />
                                    <label for="female">Feminino</label>
                                </div>

                                <div className="gender-input">
                                    <input id="male" type="radio" name="gender" />
                                    <label for="male">Masculino</label>
                                </div>

                                <div className="gender-input">
                                    <input id="none" type="radio" name="gender" />
                                    <label for="none">Prefiro não dizer</label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label></label>
                            <div className='btn'>
                                <button > Salvar </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}