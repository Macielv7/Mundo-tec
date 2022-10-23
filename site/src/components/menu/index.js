import storage from 'local-storage'
import { useState } from 'react';

import { useNavigate, Link } from 'react-router-dom';

import './index.scss'

export default function Index() {
    
    

    return (
        <nav class="sidebar close">
        <header>
            <div class="image-text">
                <span class="image">
                    
                </span>

                <div class="text logo-text">
                    <span class="name">MUNDO TEC</span>
                    <span class="profession">administrativo</span>
                </div>
            </div>

           
        </header>

        <div class="menu-bar">
            <div class="menu">

                <ul class="menu-links">
                    <li class="nav-link">
                    <Link to='/cadastrarp' >
                            <i class='bx bx-home-alt icon' ></i>
                            <span class="text nav-text">Dashboard</span>
                            </Link>
                    </li>

                    

                    <li class="nav-link">
                    <Link to='/cadastrarp' >
                            <i class='bx bx-bar-chart-alt-2 icon' ></i>
                            <span class="text nav-text">Cadastrar</span>
                            </Link>
                    </li>

                    <li class="nav-link">
                    <Link to='/consultarp' >
                            <i class='bx bx-bell icon'></i>
                            <span class="text nav-text">Consultar</span>
                            </Link>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-pie-chart-alt icon' ></i>
                            <span class="text nav-text">....</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-heart icon' ></i>
                            <span class="text nav-text">.....</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-wallet icon' ></i>
                            <span class="text nav-text">.....</span>
                        </a>
                    </li>

                </ul>
            </div> 
            <hr/>

            <div class="bottom-content">
                <li class="">
                <Link to='/' >
                        <i class='bx bx-log-out icon' ></i>
                        <span class="text nav-text">Sair</span>
                    </Link>
                </li>

                
            </div>
        </div>

    </nav>
    )
}
