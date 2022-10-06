
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// git config -–global user.name "nome completo"
// git config -–global user.email "emaildogit@email.com"

import Data from "./components/flashDeals/data"

import Conta from "./pages/conta/Conta"

import CriarConta from "./pages/criarConta"
import Endereco from "./pages/endereco"
import Cadastrar from "./pages/cadastrar"
import Home from "./pages/adimin/home"
import CadastrarP from "./pages/adimin/cadastrarP"
import ConsultarP from "./pages/adimin/consultarP"
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
           
           
           
           <Route path='/home' element={<Home />} />
           <Route path='/criarconta' element={<CriarConta />} />
           <Route path='/Cadastrar' element={<Cadastrar />} />
           <Route path='/Endereco' element={<Endereco />} />
              <Route path='/adm1' element={<CadastrarP />} />
              <Route path='/adm2' element={<ConsultarP />} />
              <Route path='/adm3' element={<Adm3/>} />
              <Route path='/adm4' element={<Adm4 />} />
            

          
          </Routes>
      </BrowserRouter>
  )
}

