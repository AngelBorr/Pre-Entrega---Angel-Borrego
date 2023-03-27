import React from 'react'
import {Link } from 'react-router-dom'
import style from './carrito.module.scss'

const Carrito = () => {

    const ProductosEnCarrito = JSON.parse(localStorage.getItem("Productos en Carrito"))

    return (
        <div className= {style.divContainer}>
            <h2>Carrito de compras</h2>
            <table className= 'table table-striped'>
                <thead>
                    <tr>
                        <th>Productos</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Sub total</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        ProductosEnCarrito.map((producto) => (
                            <tr>
                                <td>{producto.nombre}</td>
                                <td>$ {producto.precio}</td>
                                <td>Cantidad Producto</td>
                                <td>$ {producto.precio}</td>
                                <td><button className="btn btn-danger">Eliminar</button></td>
                            </tr>
                        
                        ))
                    }
                        
                    
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Sub Total</td>
                        <td>$ </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Iva</td>
                        <td>$ </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Total</td>
                        <td>$ </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <div>
                <Link to= {'/catalogo'}>
                    <button className="btn btn-outline-success">
                        Seguir Comprando
                    </button>
                </Link>
                
                
            </div>

        </div>
    )
}

export default Carrito