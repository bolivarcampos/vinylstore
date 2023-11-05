import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import { Link } from "react-router-dom";

import TotalItems from "../CartContent/TotalItems";

import "./NavBar.css";

const NavBar = () => {
  const { cart } = useContext(dataContext);
  return (
    <div className="nav-container">
      <nav className="navbar">
        <Link to={"/"}>
          <h1 className="navbar-logo">VinylStore.</h1>
        </Link>

        <Link className="items-navbar" to={"/"}>
          <h2>Inicio</h2>
        </Link>

        <Link className="items-navbar" to={"/blink182"}>
          <h2>Blink182</h2>
        </Link>

        <Link className="items-navbar" to={"/metallica"}>
          <h2>Metallica</h2>
        </Link>

        <Link className="items-navbar" to={"/offspring"}>
          <h2>The Offspring</h2>
        </Link>

        <Link className="see-Carrito" to={"/cart"}>
          🛒
          {cart.length > 0 ? <TotalItems /> : null}
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
