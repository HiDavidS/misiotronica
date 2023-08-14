import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contacto.css';

const Contacto = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Simulamos el envío del formulario
    setTimeout(() => {
      // Lógica de envío del formulario aquí
      toast.success('¡Mensaje enviado con éxito!');
    }, 1000);
  };

  return (
    <div className="contacto-container">
      <h2>Contacto</h2>
      <div className="contacto-card">
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" rows="4"></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contacto;
