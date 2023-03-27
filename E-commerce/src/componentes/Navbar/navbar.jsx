import { Link, NavLink } from 'react-router-dom';
import style from './navbar.module.scss';
import './navbar.module.css'

//const contadorCarrito = JSON.parse(localStorage.getItem("Productos en Carrito"))

const Navbar = ({icono}) => {

    const styleActive = {
        backgroundColor: 'rgb(35, 89, 227)',
        color: 'white',
        width: '100%',
        height: '45px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <nav>
            <div>
                <ul className={style.container}>
                    <li><NavLink style={({isActive}) => (isActive ? styleActive : undefined)} to={"/catalogo"} >Catalogo</NavLink></li>
                    <li><NavLink style={({isActive}) => (isActive ? styleActive : undefined)} to={"/referee"}>Referee</NavLink></li>
                    <li><NavLink style={({isActive}) => (isActive ? styleActive : undefined)} to={"/banderines"}>Banderines</NavLink></li>
                    <li><NavLink style={({isActive}) => (isActive ? styleActive : undefined)} to={"/accesorios"}>Accesorios</NavLink></li>
                    <li><NavLink style={({isActive}) => (isActive ? styleActive : undefined)} to={"/silbatos"}>Silbatos</NavLink></li>
                    <li><NavLink style={({isActive}) => (isActive ? styleActive : undefined)} to={"/sport"}>Sport</NavLink></li>
                    <li><NavLink style={({isActive}) => (isActive ? styleActive : undefined)} to={"/carrito"}>
                        <div>
                            <img className={style.imgCarrito} src={icono} alt="" />
                            <span className={style.contadorCarrito}>{/*contadorCarrito*/}</span>
                        </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;