import style from './main.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

const Main = () => {

    const [productos, setProductos] = useState([])

    const getProductos = async () =>{
        try {
            const res = await axios("http://localhost:3000/productos");
            setProductos(res.data)
        } catch (error) {
            console.log("ERROR" + error)
        }
    }

    useEffect(() => {
        getProductos();
    }, []);

    const[count, setCount] = useState(0)

    const contador = count;

    localStorage.setItem("Productos en Carrito", JSON.stringify(contador))
    
    console.log(contador)
    

    return (
        <div className='cardProduct borderRounded h-100 card-group'>
            {productos.map((producto)=>( 

                <div className='cardProduct__description'>
                
                    <img src="" alt="" className='cardProduct__image borderRounded imgTarjetas'/>
                
                    <strong className='cardProduct__description__price'>$ {producto.precio}</strong>
                    <h6>{producto.nombre}</h6>
                    <p className='cardProduct__description__text'>Descripcion Producto: {producto.descripcion}</p>
                    <p>Posicion Catalogo: {producto.id}</p>
                    <p>Categoria: {producto.categoria}</p>
                    <div>
                        <button id={producto.id} className='btn btn-primary' onClick={() => setCount(count + 1)}>Agregar al Carrito</button>
                        <button id={producto.id} className='btn btn-danger' onClick={() => setCount(count - 1)}>Eliminar del Carrito</button>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default Main



    

    /*  */
    

    

