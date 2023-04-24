import React, { useContext, useEffect, useState } from 'react'
import {Link, useParams } from 'react-router-dom'
import style from './carrito.module.scss'
import db from '../../../db/firebase-config'
import { collection, deleteDoc, doc, getDocs, addDoc, updateDoc, FieldValue, deleteField } from 'firebase/firestore'
import { dataContext } from '../Contexts/CartContext'

const Carrito = () => {

    const { productosFirebasePedidos, setProductosFirebasePedidos, precioTotal, ivaProductos, subTotal} = useContext(dataContext)

    const productsAddPedidos = collection(db, "pedidos")

    
    const getProductos = async () => {
        try {
          const productosPedido = await getDocs(productsAddPedidos)
          const productos = productosPedido.docs.map(doc => ({...doc.data(), id: doc.id}))
          setProductosFirebasePedidos(productos);
          console.log(productos)
           
          
        } catch (error) {
          console.log("ERROR" + error)
          
        }
        
      }

      const eliminarProductoFirebasePedidos = async (id) => {
        try {
            
          const docRef = doc(db, "pedidos", id);
          await deleteDoc(docRef);          
          console.log("Producto eliminado correctamente");
          getProductos();
        } catch (error) {
          console.error("Error al eliminar el Producto: ", error);
        }
      };

      console.log(productosFirebasePedidos)  
    
      useEffect(() => {
            getProductos();
        }, []);

        

                      
        
    return (
        <div className= {style.divContainer}>
            <h2>Carrito de compras</h2>
            <table className= 'table table-striped'>
                <thead>
                    <tr>
                        <th>Productos</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Color</th>
                        <th>Talle</th>
                        <th>Sub total</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        productosFirebasePedidos.map((producto) => (
                            <tr key={producto.id}>
                                <td>{producto.nombre}</td>
                                <td>$ {producto.precio}</td>
                                <td>{producto.cantidad}</td>
                                <td>{producto.color}</td>
                                <td>{producto.talle}</td>
                                <td>$ {(producto.precio)*(producto.cantidad)}</td>
                                <td><button id={producto.id} className="btn btn-danger" onClick={(id) => eliminarProductoFirebasePedidos (producto.id)}>Eliminar</button></td>
                            </tr>
                        
                        ))
                    }

                    {/* generar alerta o mostrar que el carrito esta vacio */}
                    {/* realizar funciones de matematicas para el carrito */}
                        
                    
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Sub Total</td>
                        <td>$ {subTotal}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Iva</td>
                        <td>$ {ivaProductos}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total</td>
                        <td>$ {precioTotal}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <div className={style.btnCartcontainer}>
                <Link to= {'/catalogo'}>
                    <button className="btn btn-outline-success">
                        Seguir Comprando
                    </button>
                </Link>
                <div className={style.btnCart}>
                    <div className={style.btnClearCart}>
                        <button className="btn btn-outline-danger">
                            Vaciar Carrito
                        </button>
                    </div>
                    
                    <Link to= {'/user'}>
                        <button className="btn btn-primary">
                            Validar Compra
                        </button>
                    </Link> 
                </div>
                               
                
            </div>

        </div>
    )
}

export default Carrito

//como sacar el subtotal?
