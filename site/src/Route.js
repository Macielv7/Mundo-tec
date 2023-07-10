import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Admiin
import CadastrarP from "./pages/adimin/cadastrarP"
import ConsultarP from "./pages/adimin/consultarP"
import ConsultarCard from "./pages/adimin/consultarCard"
import Cupom from "./pages/adimin/cupom"

//Telas Crientes
import Home from "./pages/Home"
import TelaPedido from "./pages/telaPedido"
import Carrinho from "./pages/carrinho"
import Pagamento from "./pages/pagamento"
import Usuario1 from "./pages/usuario/usuario1"
import Usuario2 from "./pages/usuario/usuario2"

//Login/Cadastro
import Login from "./pages/login"
import CriarConta from "./pages/criarConta"
import Recuperasenha from "./pages/recuperaSenha"


export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="cadastrarp" element={<CadastrarP />} />
          <Route path="consultarp" element={<ConsultarP />} />
          <Route path="consultarcard" element={<ConsultarCard />} />
          <Route path='cupom' element={<Cupom />} />
        </Route>

        <Route>
          <Route path='/' element={<Home />} />
          <Route path="/tela/:id/pedido" element={<TelaPedido />} />
          <Route path="carrinho" element={<Carrinho />} />
          <Route path='pagamento' element={<Pagamento />} />
          <Route path="usuario1" element={<Usuario1 />} />
          <Route path='usuario2' element={<Usuario2 />} />
        </Route>

        <Route>
          <Route path='criarconta' element={<CriarConta />} />
          <Route path='recuperasenha' element={< Recuperasenha />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}