import './index.scss'
import Header from "../../../components/header"



export default function Index() {



    return (
        <div className='usu2'>
            <Header />

            <div className='perfil-geral'>
                <h1>MEUS DADOS</h1>

                <div className='perfil-1'>

                    <div className='opa'>
                        <div className="gender-title">
                            <h3>DADOS BÁSICOS</h3>
                        </div>
                        <input />
                        <input />
                        <input />
                        <input />


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
                                    <label for="none">outros</label>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                <div className='perfil-2'>

                    <div>
                        <div className="gender-title">
                            <h3>ENDERECO</h3>
                        </div>

                        <div>Rua Lopez Freire</div>
                        <div>Número: 95</div>
                        <div>CEP 04000001 - São Paulo, SP</div>

                    </div>

                </div>

            </div>


        </div>





    )
}