

import React from 'react';
import './SearchBar.css'; 

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-bar-container">
      {}
      <i className="fas fa-search search-icon"></i>
      {}
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
