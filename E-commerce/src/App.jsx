import { useEffect, useState } from 'react'
import './App.module.css'
import Header from './componentes/header/Header'
import Navbar from './componentes/Navbar/navbar'
import 'react-bootstrap'
import './assets/myApiJson/productos.json'
import axios from 'axios'
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



function App() {

  const [productos, setProductos] = useState([])

    const getProductos = async () =>{
        try {
            const res = await axios("http://localhost:3000/productos");
            setProductos(res.data)
            localStorage.setItem("Stock de Productos", JSON.stringify(res.data))
        } catch (error) {
            console.log("ERROR" + error)
        }
    }

    useEffect(() => {
        getProductos();
    }, []);

    
  
  return (
    
    <div>
      <Header/>
      <Navbar icono="./src/assets/img/carrito.png"/>
      <Routes>

        {/* RUTEO PAGINAS */}
        <Route path='/' element={<Navigate to="/catalogo"/>}/>
        <Route path='/catalogo' element={<Catalogo productos={productos}/>}/>
        <Route path='/referee' element={<Referee productos={productos}/>}/>
        <Route path='/banderines' element={<Banderines productos={productos}/>}/>
        <Route path='/accesorios' element={<Accesorios productos={productos}/>}/>
        <Route path='/silbatos' element={<Silbatos productos={productos}/>}/>
        <Route path='/sport' element={<Sport productos={productos}/>}/>
        <Route path='/carrito' element={<Carrito/>}/> 

          {/* RUTEO CARDDETALL */}
        <Route path='/catalogo/:id' element={<CardDetail/>}/>
        <Route path='/referee/:id' element={<CardDetail productos={productos}/>}/>
        <Route path='/banderines/:id' element={<CardDetail productos={productos}/>}/>
        <Route path='/accesorios/:id' element={<CardDetail productos={productos}/>}/>
        <Route path='/silbatos/:id' element={<CardDetail productos={productos}/>}/>
        <Route path='/sport/:id' element={<CardDetail productos={productos}/>}/>
                  
      </Routes>

    
      
        

    </div>
    
  )
}

export default App
