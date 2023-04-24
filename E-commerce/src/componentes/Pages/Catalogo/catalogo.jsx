import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import './catalogo.module.scss'
import { useContext } from 'react';
import { dataContext } from '../../Contexts/CartContext';

const Catalogo = () => {

    const { loading, productos } = useContext(dataContext)

    return (

        <main className='d-flex justify-content-around align-content-around flex-wrap cardProduct borderRounded h-100 card-group'>
            
            {productos.map((producto, key) =>(
                <Link to={`${(key = producto.id)}`} className='d-flex justify-content-around align-content-around flex-wrap cardProduct borderRounded h-100 card-group'style={{width: '18%'}}>
                    <div key = {producto.id} className='cardProduct__description' style={{width: '100%', height: '365px', border: '2px solid black', padding: '10px', margin: '10px'}}>
                        <img src={producto.img} alt="" className='card-img-top' style={{width: '100%', height: '220px', padding: '5px'}}/>
                        <strong className='cardProduct__description__price' >$ {producto.precio}</strong>
                        <h6 className='card-title'>{producto.nombre}</h6>                        
                                              
                    </div>
                </Link>
            ))}
            
        </main>
            

    )
}

export default Catalogo