import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Login from './pages/login';
import Carrinho from './pages/carrinho';



import { BrowserRouter,Routes,Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        
        <Route path='/login' element={ < Login /> } />
        <Route path='/carrinho' element={ < Carrinho /> } />
        
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



