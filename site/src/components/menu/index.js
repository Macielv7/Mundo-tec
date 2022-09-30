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
                    <a href='/home'><img src="./img/perfil.png"  /></a>
                    <div>Home</div>
                    </div>

                    <div>
                    <a href='/adm1'><img src="./img/cesta.png" alt="cadastrar" /></a>
                    <div>Cadastrar</div>
                    </div>
                    
                    <div>
                    <a href='/adm2'><img src="./img/cesta.png" alt="consultar" /></a>
                        <div>Consultar</div>
                    </div>

                    <div>
                    <a href='/adm3'><img src="./img/cesta.png" alt="consultar" /></a>
                        <div>Consultas</div>
                    </div>

                    <div>
                    <a href='/adm3'><img src="./img/cesta.png" alt="consultar" /></a>
                        <div>Consultas</div>
                    </div>
                </div>
            </div>

            <div className='menu-items'>
                <div>
                <a href='/conta'><img src="./img/sair.png" alt="consultar" /></a>
                    <div>Sair</div>
                </div>
            </div>
        </nav>
    )
}