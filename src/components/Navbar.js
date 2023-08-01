import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import './Navbar.css';
import colors from '../colors'; 

const Navbar = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: colors.primary }}>
      <div className="logo">
        <img src={Logo} alt="Misiotrónica" />
        <h2 style={{ color: colors.neutral }}>Misiotrónica</h2>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" style={{ color: colors.complement }}>Inicio</Link>
        </li>
        <li>
          <Link to="/venta" style={{ color: colors.complement }}>Venta</Link>
        </li>
        <li>
          <Link to="/sobre-nosotros" style={{ color: colors.complement }}>Sobre Nosotros</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


