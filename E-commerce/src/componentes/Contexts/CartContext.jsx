import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { createContext, useEffect, useState } from 'react';
import db from '../../../db/firebase-config';
import { useParams } from 'react-router-dom';


export const dataContext = createContext();

const DataProvider = ({ children }) => {

  //solicitud de productos a Firebase

  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([])

  const productosBaseDatos = collection(db, "productos")

  const getProductos = async () => {
    try {
      const productosCollection = await getDocs(productosBaseDatos)
      const productos = productosCollection.docs.map(doc => ({...doc.data(), id: doc.id}))
      setProductos(productos);
      setLoading(false); 
      
    } catch (error) {
      console.log("ERROR" + error)
      
    }
    
  }

  useEffect(() => {
    getProductos();
  }, []);

  //guarda de productos en base de datos (pedidos)

  const [addProduct, setAddProduct] = useState([])
  

  // mostrar productos en carrito

  //addProduct es la const donde estan guardados los productos

  const [productosFirebasePedidos, setProductosFirebasePedidos] = useState([])
  
  //cantidad de productos en pedidos

  const numCar = productosFirebasePedidos.length;

  console.log(numCar)

  // cuentas matematicas de carrito

  const precioTotal = productosFirebasePedidos.reduce((acc, e) => acc + (e.precio * e.cantidad), 0)
  const ivaProductos = precioTotal*0.21
  const subTotal = precioTotal - ivaProductos

  // user

  const [inputNombre, setInputNombre] = useState()
  const [inputApellido, setInputApellido] = useState()
  const [inputEmail, setInputEmail] = useState()
  const [inputDireccion, setInputDireccion] = useState()
  const [inputPais, setInputPais] = useState()
  const [inputProvincia, setInputProvincia] = useState()
  const [inputCodigoPostal, setInputCodigoPostal] = useState()




  

  return (
    <dataContext.Provider value={{loading, setLoading, productos, productosBaseDatos, addProduct, setAddProduct, 
                                  productosFirebasePedidos, setProductosFirebasePedidos, numCar, precioTotal, ivaProductos, 
                                  subTotal, inputNombre, setInputNombre, inputApellido, setInputApellido, inputEmail, setInputEmail,
                                  inputDireccion, setInputDireccion, inputPais, setInputPais, inputProvincia, setInputProvincia, 
                                  inputCodigoPostal, setInputCodigoPostal}}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;


