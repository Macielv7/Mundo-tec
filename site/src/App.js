import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import InfoUsuario from "./components/infoUsuario"
import Conta from "./pages/conta"

import CadastrarP from "./pages/adimin/cadastrarP"
import ConsultarP from "./pages/adimin/consultarP"
import ConsultarCard from "./pages/adimin/consultarCard"


import TelaPedido from "./pages/telaPedido"
import Carrinho from "./pages/carrinho"
import TelaInicial from "./pages/telaInicial"

import Departamento from "./pages/departamento"

import PagamentoCartao from "./pages/pagamentoCartao"

import Recuperasenha from "./pages/recuperaSenha"
import CriarConta from "./pages/criarConta"

import Usuario1 from "./pages/usuario/usuario1"
import Usuario2 from "./pages/usuario/usuario2"

import LoginUsuario from "./pages/loginUsuario"



import Audio from "./pages/departamento/audio"
import CamerasDrones from "./pages/departamento/camerasDrones"
import CasaInteligente from "./pages/departamento/casaInteligente"
import Celular from "./pages/departamento/celular"
import EspacoGamer from "./pages/departamento/espacoGamer"
import Gamer from "./pages/departamento/gamer"
import Hardware from "./pages/departamento/hardware"
import Perifericos from "./pages/departamento/perifericos"
import Tv from "./pages/departamento/tv"







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
                <Route path="consultarcard" element={<ConsultarCard />} />
                <Route path="/tela/:id/pedido" element={<TelaPedido />} />
                <Route path="carrinho" element={<Carrinho />} />
                
                <Route path='cadastrarp/:id' element={<CadastrarP />} />
                <Route path='LOGINUSUARIO' element={< LoginUsuario />} />
                <Route path='talainicio' element={< TelaInicial />} />
                <Route path='departamento' element={< Departamento />} />
                
                
                <Route path='infoUsuario' element={< InfoUsuario />} />
                <Route path='recuperasenha' element={< Recuperasenha />} />
                
              </Route>

              <Route>
                <Route path='criarconta' element={<CriarConta  />} />

                <Route path='usuario1' element={<Usuario1  />} />
                <Route path='usuario2' element={<Usuario2  />} />

                <Route path='cartao' element={<PagamentoCartao  />} />
              </Route>


              <Route>

                <Route path='celular' element={<Celular  />} />
                <Route path='gamer' element={<Gamer  />} />
                <Route path='tv' element={<Tv  />} />
                <Route path='hardware' element={<Hardware />} />

                <Route path='espacogamer' element={<EspacoGamer  />} />
                <Route path='perifericos' element={<Perifericos  />} />
                <Route path='camerasdrones/:idParam' element={<CamerasDrones  />} />
                <Route path='audio' element={<Audio />} />

                <Route path='casainteligente' element={<CasaInteligente  />} />
                
                
              </Route>
          
          </Routes>
      </BrowserRouter>
  )
}


//git config -–global user.name "nome completo"
//git config -–global user.email "emaildogit@email.com"
