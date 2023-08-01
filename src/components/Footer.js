// Footer.js
import React from 'react';
import './Footer.css';
import colors from '../colors';
const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: colors.primary, color: colors.neutral }}>
      <div className="container">
        <p>Todos los derechos reservados &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
