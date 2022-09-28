import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// git config -–global user.name "nome completo"
// git config -–global user.email "emaildogit@email.com"

import Data from "./components/data"

import Conta from "./pages/conta/Conta"





function App() {

  const { productItems } = Data

  const [CartItem, setCartItem] = useState([])


  const addToCart = (product) => {

    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {

      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }


  return (

        <Router>
          <Conta productItems={productItems} addToCart={addToCart} />
        </Router>

  )
}

export default App

