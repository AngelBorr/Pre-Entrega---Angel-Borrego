import style from './navbar.module.scss';


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
                                <span className={style.contadorCarrito}>0</span>
                            </div>
                        </a>        
                    </li>
                </ul>
                        
            </div>
        </nav>
    )
}

export default Navbar;