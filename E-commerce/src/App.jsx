import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './componentes/header/Header'
import Navbar from './componentes/Navbar/navbar'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Navbar icono="./src/assets/img/carrito.png"/>
      
    </div>
  )
}

export default App
