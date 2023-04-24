import { collection, getDoc, doc, addDoc } from 'firebase/firestore';
import { useContext, useEffect, useState, forceUpdate } from 'react'


import db from '../../../db/firebase-config';
import Spinner from '../../assets/Spinner/spinner';
import { dataContext } from '../Contexts/CartContext';
import { useParams } from 'react-router-dom';


function CardDetall() {

  const { loading, setLoading, productosBaseDatos, 
          addProduct, setAddProduct, 
          
        } = useContext(dataContext)  

  const [producto, setProducto] = useState({});
  const [inputCantidad, setInputCantidad] = useState("")
  const [inputColor, setInputColor] = useState("")
  const [inputTalle, setInputTalle] = useState("")

  const [items, setItems] = useState([]);
  
  

  const { id } = useParams();
  
  useEffect(() => {
    const productoRef = doc(productosBaseDatos, id);
    getDoc(productoRef).then((doc) => {
      if (doc.exists()) {
        setLoading(false);
        setProducto(doc.data());
        
      } else {
        console.log('Producto Inexistente');
      }
    });
  }, [id]);

  const guardarPoductoEnFirebase = async (producto) => {

    try {
      
      const docRef = await addDoc(collection(db, "pedidos"), {
        nombre: producto.nombre,
        cantidad: inputCantidad,
        precio: producto.precio,
        color: inputColor,
        talle: inputTalle,
        id: id
      });

      setAddProduct([...addProduct, producto])
      alert("Documento agregado con ID: ")
      console.log("Documento agregado con ID: ", docRef.id);

      return docRef;

      

    } catch (e) {
      console.error("Error al agregar el documento: ", e);
    } 
  };
  

  useEffect(() => {
    guardarPoductoEnFirebase;
  })

  

  const nuevoProducto = {
    nombre: producto.nombre,
    cantidad: 1,
    precio: producto.precio,
    id: id
  };

 console.log(items);

  return (
    <main className="containerMain">
      {loading ? (<Spinner/>) : (
        <div className='d-flex justify-content-around align-content-around flex-wrap cardProduct borderRounded h-100 card-group'>
          <div className='cardProduct__description' style={{width: '50%', border: '2px solid black', padding: '10px', margin: '10px'}}>
            <div className="row">
              <div className="col">
                <img src={producto.img} alt="" className='card-img-top' style={{width: '100%', height: '275px', padding: '5px'}}/>
              </div>

              <div className="col">
                <strong className='cardProduct__description__price' >$ {producto.precio}</strong>
                <h6 className='card-title'>{producto.nombre}</h6>
                <p className='cardProduct__description__text card-body' >Descripcion Producto: {producto.descripcion}</p>
                <div class="mb-3">
                  <label for="disabledSelect" class="form-label">Cuantas deseas Comprar</label>
                  <select id="disabledSelect" class="form-select" onChange={(e) => setInputCantidad(e.target.value)} value={inputCantidad}>
                    <option>-</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </div> 
                <div class="mb-3">
                  <label for="disabledSelect" class="form-label">Elegi el Color</label>
                  <select id="disabledSelect" class="form-select" onChange={(e) => setInputColor(e.target.value)} value={inputColor}>
                    <option>-</option>
                    <option>Amarillo</option>
                    <option>Naranja</option>
                    <option>Celeste</option>
                    <option>Negro</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="disabledSelect" class="form-label">Elegi el Talle</label>
                  <select id="disabledSelect" class="form-select" onChange={(e) => setInputTalle(e.target.value)} value={inputTalle}>
                    <option>-</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                  </select>
                </div>                
                <div>
                  <button id={producto.id} className='btn btn-primary' style={{width: '99%', margin: '3px'}} onClick={() => {guardarPoductoEnFirebase (producto)}}>Agregar al Carrito</button>
                </div>
              </div>
            </div>            
          </div>             
        </div>
      )}        
              
    </main>        

  )
}
  


export default CardDetall