
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// git config -–global user.name "nome completo"
// git config -–global user.email "emaildogit@email.com"

import Data from "./components/flashDeals/data"

import Conta from "./pages/conta/Conta"


import Home from "./pages/adimin/home"
import Adm1 from "./pages/adimin/adm1"
import Adm2 from "./pages/adimin/adm2"
import Adm3 from "./pages/adimin/adm3"
import Adm4 from "./pages/adimin/adm4"




const { productItems } = Data



export default function Index() {

  return (
      <BrowserRouter>
          <Routes>
      
              <Route>
              <Route path='/' element={<Conta productItems={productItems} />} />
              </Route>
           
           <Route>
           
           <Route path='/home' element={<Home />} />
              <Route path='/adm1' element={<Adm1 />} />
              <Route path='/adm2' element={<Adm2 />} />
              <Route path='/adm3' element={<Adm3/>} />
              <Route path='/adm4' element={<Adm4 />} />
            </Route>

          
          </Routes>
      </BrowserRouter>
  )
}

