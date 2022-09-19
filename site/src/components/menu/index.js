






import './index.scss'

export default function Index() {
    return (
        <nav className="comp-menu">
            <div>
                <div className='logo'>
                    <img src="./img/logo.png" alt="logo" />
                </div>

                <div className='menu-items'>
                    
                    <div>
                    <img src="./img/icons8-sms-de-token.png" alt="cadastrar" />
                    <div>Consultas</div>
                    </div>

                    <div>
                    <img src="./img/icons8-sms-de-token.png" alt="cadastrar" />
                    <div>Consultas</div>
                    </div>

                    <div>
                    <img src="./img/icons8-sms-de-token.png" alt="cadastrar" />
                    <div>Consultas</div>
                    </div>

                    <div>
                    <img src="./img/icons8-sms-de-token.png" alt="cadastrar" />
                    <div>Consultas</div>
                    </div>

                    <div>
                   <img src="./img/icons8-sms-de-token.png" alt="consultar" />
                        <div>Consultas</div>
                    </div>
                </div>
            </div>

            <div className='menu-items'>
                <div>
                <img src="./img/icons8-sms-de-token.png" alt="consultar" />
                    <div>Sair</div>
                </div>
            </div>
        </nav>
    )
}