import { Link } from 'react-router-dom'
import style from "./footer.module.css"

const Footer = () => {
  return (
    <footer>
        <h5>La tienda del Arbitro. copyright@2023</h5>
        <div className={style.containerFooter}>
            <section>
                <h6 className={style.subTitle}>Nuestra empresa</h6>
                <div className={style.linksFooter}>                    
                    <Link to= {'/#'}>
                        <p>¿Quienes somos?</p>
                    </Link>
                    <Link to= {'/#'}>
                        <p>Trabaja con nosotros</p>
                    </Link>                    
                </div>
            </section>
            <section>
                <h6 className={style.subTitle}>Servicios</h6>
                <div className={style.linksFooter}>                    
                    <Link to= {'/#'}>
                        <p>Tipos de entrega</p>
                    </Link>
                    <Link to= {'/#'}>
                        <p>Garantias</p>
                    </Link>
                    <Link to= {'/#'}>
                        <p>Financiacion</p>
                    </Link>
                    <Link to= {'/#'}>
                        <p>Tabla de talles</p>
                    </Link>
                    <Link to= {'/#'}>
                        <p>Tarjeta de regalos</p>
                    </Link>                
                </div>
            </section>
            <section>
                <h6 className={style.subTitle}>¿Te ayudamos?</h6>
                <div className={style.linksFooter}>                    
                    <Link to= {'/#'}>
                        <p>Contacto</p>
                    </Link>
                    <Link to= {'/#'}>
                        <p>Preguntas frecuentes</p>
                    </Link>
                    <Link to= {'/#'}>
                        <p>Garantias</p>
                    </Link>
                    <Link to= {'/#'}>
                        <p>Devoluciones</p>
                    </Link>
                    <Link to= {'/#'}>
                        <p>Tarifas y politicas de envio</p>
                    </Link>                
                </div>
            </section>
            <section>
                <h6 className={style.subTitle}>Encuentranos en Nuestras Redes</h6>
                <div className={style.linksFooter}>                    
                    <Link to= {'/#'}>
                        <img className={style.imgInstagram} src="./src/assets/img/instagram.png" alt="" />
                    </Link> 
                </div>
                <div className={style.linksFooter}>
                    <Link to= {'/#'}>
                        <img className={style.imgFacebook} src="./src/assets/img/facebook.png" alt="" />
                    </Link>
                </div>
                <div className={style.linksFooter}>
                    <Link to= {'/#'}>
                        <img className={style.imgYoutube} src="./src/assets/img/youtube.png" alt="" />
                    </Link>
                </div>
            </section>
        </div>
    </footer>
  )
}

export default Footer
