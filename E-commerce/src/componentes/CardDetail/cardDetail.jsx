import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CardDetall = () => {

  const [producto, setProducto] = useState({});

  const {id} = useParams();

  useEffect(()=>{
    fetch(`http://localhost:3000/productos/${id}`)
    .then((response) => response.json())
    .then((data) => {setProducto(data)});
  }, [])

  function guardarPoductoEnStorage (){
    const productoSeleccionado = [producto]

    localStorage.setItem("Productos en Carrito", JSON.stringify(productoSeleccionado))

    console.log(productoSeleccionado)

    /* tiene que sumar cada producto al listado */

  }

  console.log(producto)

      return (
        <main className="containerMain">
          <div className='d-flex justify-content-around align-content-around flex-wrap cardProduct borderRounded h-100 card-group'>

              <div className='cardProduct__description' style={{width: '50%', border: '2px solid black', padding: '10px', margin: '10px'}}>
                <div class="row">
                  <div class="col">
                    <img src={producto.img} alt="" className='card-img-top' style={{width: '100%', height: '275px', padding: '5px'}}/>
                  </div>

                  <div class="col">
                    <strong className='cardProduct__description__price' >$ {producto.precio}</strong>
                    <h6 className='card-title'>{producto.nombre}</h6>
                    <p className='cardProduct__description__text card-body' >Descripcion Producto: {producto.descripcion}</p>
                    <p>Posicion Catalogo: {producto.id}</p>
                    <p>Categoria: {producto.categoria}</p>
                    <div>
                      <button id={producto.id} className='btn btn-primary' style={{width: '92%', margin: '3px'}} onClick={(guardarPoductoEnStorage ())}>Agregar al Carrito</button>
                    </div>
                  </div>
                </div>            
              </div>             

          </div>
        </main>
      )
    
    
}
  


export default CardDetall