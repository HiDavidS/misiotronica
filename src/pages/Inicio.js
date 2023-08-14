import React from 'react';
import './Inicio.css';
const Inicio = () => {
  return (
    <div className="inicio-container">
      <div className="fondo"></div>
      <div className="contenido">
        <h1>Bienvenido a Misiotrónica</h1>
        <p>¡Encuentra todos los elementos de electrónica que necesitas!</p>
        <div className="redes-sociales">
          <a href="https://www.facebook.com/misiotronica" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com/misiotronica" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
