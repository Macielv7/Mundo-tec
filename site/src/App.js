
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Data from "./components/flashDeals/data"

import Conta from "./pages/conta/Conta"

import CadastrarP from "./pages/adimin/CadastrarP"
import ConsultarP from "./pages/adimin/ConsultarP"
import TelaPedido from "./pages/telaPedido"







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
                
              </Route>
          
          </Routes>
      </BrowserRouter>
  )
}

