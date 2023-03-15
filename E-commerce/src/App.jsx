import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './componentes/header/Header'
import Navbar from './componentes/Navbar/navbar'
import Main from './componentes/Main/main'
import 'react-bootstrap'
import './assets/myApiJson/productos.json'


function App() {

  
  
  return (
    <div>
      <Header/>
      <Navbar icono="./src/assets/img/carrito.png"/>
      <div>
      <Main/>
      </div>
      
    </div>
    
  )
}

export default App
