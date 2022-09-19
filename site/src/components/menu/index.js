






import './index.scss'

export default function Index() {
    return (
        <nav className="comp-menu">
            <div>
                <div className='logo'>
                    <img src="./1650375712055.png" alt="logo" />
                </div>

                <div className='menu-items'>
                    
                    <div>
                    <a href='/adm'><img src="./icon-cadastrar.svg" alt="cadastrar" /></a>
                    <div>Consultas</div>
                    </div>
                    <div>
                    <a href='/arquivada'><img src="./icon-consultar.svg" alt="consultar" /></a>
                        <div>Consultas Arquivadas</div>
                    </div>
                </div>
            </div>

            <div className='menu-items'>
                <div>
                <a href='/inicio'><img src="./icon-sair.svg" alt="consultar" /></a>
                    <div>Sair</div>
                </div>
            </div>
        </nav>
    )
}