
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Data from "./components/flashDeals/data"

import Conta from "./pages/conta/Conta"

import CadastrarP from "./pages/adimin/CadastrarP"
import ConsultarP from "./pages/adimin/ConsultarP"






const { productItems } = Data


export default function Index() {

  return (
      <BrowserRouter>
          <Routes>
      
              <Route>
                <Route path='/' element={<Conta productItems={productItems} />} />
              </Route>
            
              <Route>
                <Route path='/cadastrarP' element={<CadastrarP />} />
                <Route path='/consultarP' element={<ConsultarP />} />
              </Route>
          
          </Routes>
      </BrowserRouter>
  )
}

