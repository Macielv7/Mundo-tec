
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Data from "./components/flashDeals/data"

import Conta from "./pages/conta/Conta"

import CadastrarP from "./pages/adimin/CadastrarP"
import ConsultarP from "./pages/adimin/ConsultarP"


import TelaPedido from "./pages/telaPedido"
import Carrinho from "./pages/carrinho"

import CriarConta from "./pages/criarConta"

import FlashDeals from "./components/flashDeals/FlashDeals"





const { productItems } = Data


export default function Index() {

  return (
      <BrowserRouter>
          <Routes>
      
              <Route>
                <Route path='/' element={<Conta productItems={productItems} />} />
              </Route>
            
              <Route>
                <Route path="cadastrarp" element={<CadastrarP />} />
                <Route path="consultarp" element={<ConsultarP />} />
                <Route path="telapedido" element={<TelaPedido />} />
                <Route path="carrinho" element={<Carrinho />} />
                <Route path="car" element={<FlashDeals />} />
                
              </Route>

              <Route>
                <Route path='criarconta' element={<CriarConta  />} />
              </Route>
          
          </Routes>
      </BrowserRouter>
  )
}

