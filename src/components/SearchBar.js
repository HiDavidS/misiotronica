/*import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Buscar artículos..."
      value={searchTerm}
      onChange={onSearchChange}
    />
  );
};

export default SearchBar;
*/

// SearchBar.js

import React from 'react';
import './SearchBar.css'; // Importar el archivo CSS

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-bar-container">
      {/* Ícono de búsqueda */}
      <i className="fas fa-search search-icon"></i>
      {/* Entrada de texto */}
      <input
        type="text"
        className="search-input"
        placeholder="Buscar artículos..."
        value={searchTerm}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBar;
