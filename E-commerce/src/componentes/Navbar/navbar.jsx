import style from './navbar.module.scss';

const contadorCarrito = JSON.parse(localStorage.getItem("Productos en Carrito"))

const Navbar = ({icono}) => {
    return (
        <nav>
            <div>
                <ul className={style.container}>
                    <li><a href="#">Referee</a></li>
                    <li><a href="#">Banderines</a></li>
                    <li><a href="#">Accesorios</a></li>
                    <li><a href="#">Silbatos</a></li>
                    <li><a href="#">Sport</a></li>
                    <li>
                        <a href="#">
                            <div>
                                <img className={style.imgCarrito} src={icono} alt="" />
                                <span className={style.contadorCarrito}>{contadorCarrito}</span>
                            </div>
                        </a>        
                    </li>
                </ul>
                        
            </div>
        </nav>
    )
}

export default Navbar;