import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Login from './pages/login';
import Carrinho from './pages/carrinho';
import CriarConta from './pages/criarConta';

import PagamentoBoleto from './pages/pagamentoBoleto';
import PagamentoCartao from './pages/pagamentoCartao';
import PagamentoPix from './pages/pagamentoPix';
import TelaInicial from './pages/telaInicial';
import TelaPedido from './pages/telaPedido';



import Adm1 from './pages/adimin/adm1';
import Adm2 from './pages/adimin/adm2';
import Adm3 from './pages/adimin/adm3';
import Adm4 from './pages/adimin/adm4';



import { BrowserRouter,Routes,Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        
        <Route path='/login' element={ < Login /> } />
        <Route path='/carrinho' element={ < Carrinho /> } />
        <Route path='/criarConta' element={ < CriarConta /> } />
        
        <Route path='/pagamentoBoleto' element={ < PagamentoBoleto /> } />
        <Route path='/pagamentoCartao' element={ < PagamentoCartao /> } />
        <Route path='/pagamentoPix' element={ < PagamentoPix /> } />
        <Route path='/telaInicial' element={ < TelaInicial /> } />
        <Route path='/telaPedido' element={ < TelaPedido /> } />
        

        <Route path='/adm1' element={ < Adm1 /> } />
        <Route path='/adm2' element={ < Adm2 /> } />
        <Route path='/adm3' element={ < Adm3 /> } />
        <Route path='/adm4' element={ < Adm4 /> } />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);