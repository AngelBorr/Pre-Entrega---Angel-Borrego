import style from './header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.tituloHeader}>La Tienda del Arbitro</h1>
    </header>
  )
}

export default Header;