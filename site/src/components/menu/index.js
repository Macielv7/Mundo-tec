import storage from 'local-storage'
import { useState } from 'react';

import { useNavigate, Link } from 'react-router-dom';

import './index.scss'

export default function Index(props) {
    
    const navigate = useNavigate();

    function sairClick() {
        storage.remove('usuario-logado');
        navigate('/');
    }

    function verificarMenuSelecionado(menu) {
        if (menu === props.selecionado)
            return 'selecionado'
        else
            return '';
    }


    return (
        <nav className="comp-menu">
            <div>
                <div className='logo'>
                    <img src="/img/logo.png" alt="logo" />
                </div>

                <div className='menu-items'>
                    
                <Link to='/home' className={verificarMenuSelecionado('Dashboard')}>
                        <img src="/img/logo.png" alt="home" />
                        <div>Dashboard</div>
                    </Link>
                    <Link to='/adm4' className={verificarMenuSelecionado('Cadastrar')}>
                        <img src="/img/logo.png" alt="home" />
                        <div>Cadastrar</div>
                    </Link>
                    <Link to='/adm3' className={verificarMenuSelecionado('home')}>
                        <img src="/img/logo.png" alt="home" />
                        <div>Altera </div>
                    </Link>
                    <Link to='/consultarP' className={verificarMenuSelecionado('home')}>
                        <img src="/img/logo.png" alt="home" />
                        <div>Consultar</div>
                    </Link>
                    <Link to='/cadastrarP' className={verificarMenuSelecionado('home')}>
                        <img src="/img/logo.png" alt="home" />
                        <div>Home</div>
                    </Link>
                </div>
             
            </div>

            <div className='menu-items'>
                <p>configura</p>
                <Link to='/admin' className={verificarMenuSelecionado('home')}>
                        <img src="/img/logo.png" alt="home" />
                        <div>Home</div>
                    </Link>

                    <Link to='/admin' className={verificarMenuSelecionado('home')}>
                        <img src="/img/logo.png" alt="home" />
                        <div>Home</div>
                    </Link>

                    <Link to='/admin' className={verificarMenuSelecionado('home')}>
                        <img src="/img/logo.png" alt="home" />
                        <div>Home</div>
                    </Link>
            </div>

              
        </nav>
    )
}
