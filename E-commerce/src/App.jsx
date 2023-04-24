import './App.css'
import Header from './componentes/Header/header'
import Navbar from './componentes/Navbar/navbar'
import 'react-bootstrap'
import './../node_modules/bootstrap/dist/css/bootstrap.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Catalogo from './componentes/Pages/Catalogo/catalogo'
import Referee from './componentes/Pages/Referee/referee'
import Banderines from './componentes/Pages/Banderines/banderines'
import Accesorios from './componentes/Pages/Accesorios/accesorios'
import Silbatos from './componentes/Pages/Silbatos/silbatos'
import Sport from './componentes/Pages/Sport/sport'
import CardDetail from './componentes/CardDetail/cardDetail'
import Carrito from './componentes/Carrito/carrito'
import Spinner from './assets/Spinner/spinner'
import Footer from './componentes/Footer/footer'
import { dataContext } from './componentes/Contexts/CartContext'
import { useContext, useEffect, useState } from 'react'
import User from './componentes/Pages/Validaciones/user'
import Pedido from './componentes/Pages/Validaciones/pedido'

function App() {

  const { loading } = useContext(dataContext)

  return (
    
    <div>
      <Header/>
      <Navbar icono="./src/assets/img/carrito.png"/>          
      {loading ? (<Spinner/>) : (

        <Routes>

          {/* RUTEO PAGINAS */}
          <Route path='/' element={<Navigate to="/catalogo"/>}/>
          <Route path='/catalogo' element={<Catalogo/>}/>
          <Route path='/referee' element={<Referee/>}/>
          <Route path='/banderines' element={<Banderines/>}/>
          <Route path='/accesorios' element={<Accesorios/>}/>
          <Route path='/silbatos' element={<Silbatos/>}/>
          <Route path='/sport' element={<Sport/>}/>
          <Route path='/carrito' element={<Carrito/>}/> 
          <Route path='/user' element={<User/>}/>
          <Route path='/pedido' element={<Pedido/>}/>

          {/* RUTEO CARDDETALL */}
          <Route path='/catalogo/:id' element={<CardDetail/>}/>
          <Route path='/referee/:id' element={<CardDetail/>}/>
          <Route path='/banderines/:id' element={<CardDetail/>}/>
          <Route path='/accesorios/:id' element={<CardDetail/>}/>
          <Route path='/silbatos/:id' element={<CardDetail/>}/>
          <Route path='/sport/:id' element={<CardDetail/>}/>
                  
        </Routes>

      )}
      <Footer/>
              

    </div>
    
  )
}

export default App
