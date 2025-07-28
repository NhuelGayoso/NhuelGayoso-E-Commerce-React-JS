import CartWidget from "../CartWidget";
import logo from "./img/pez.png";
import "./index.css";

const NavBar = (props) => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo de la tienda" width={100}/>
          <h2>PescaShop</h2>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/">Inicio</a>
          </li>
        </ul>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/">Productos</a>
          </li>
        </ul>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/">Ofertas</a>
          </li>
        </ul>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/">Contactos</a>
          </li>
        </ul>
      <CartWidget></CartWidget>
      </div>
    </div>
  );
};

export default NavBar;
