import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Conta from "./pages/conta/Conta"

import CadastrarP from "./pages/adimin/CadastrarP"
import ConsultarP from "./pages/adimin/ConsultarP"


import TelaPedido from "./pages/telaPedido"
import Carrinho from "./pages/carrinho"
import TelaInicial from "./pages/telaInicial"


import CriarConta from "./pages/criarConta"
import LoginUsuario from "./pages/loginUsuario"
import Endereco from "./pages/endereco"





export default function Index() {

  return (
      <BrowserRouter>
          <Routes>
      
              <Route>
                <Route path='/' element={<Conta  />} />
              </Route>
            
              <Route>
                <Route path="cadastrarp" element={<CadastrarP />} />
                <Route path='/cadastrarp/:id' element={<CadastrarP />} />
                <Route path="consultarp" element={<ConsultarP />} />
                <Route path="/tela/:id/pedido" element={<TelaPedido />} />
                <Route path="carrinho" element={<Carrinho />} />
                <Route path="endereco" element={<Endereco />} />
                <Route path='cadastrarp/:id' element={<CadastrarP />} />
                <Route path='LOGINUSUARIO' element={< LoginUsuario />} />
                <Route path='talainicio' element={< TelaInicial />} />
                
                
              </Route>

              <Route>
                <Route path='criarconta' element={<CriarConta  />} />
              </Route>
          
          </Routes>
      </BrowserRouter>
  )
}

