import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import producto1Image from '../images/Producto 1.png';
import producto2Image from '../images/Producto 2.png';
import producto3Image from '../images/Producto 3.png';
import producto4Image from '../images/Producto 4.png';
import producto5Image from '../images/Producto 5.png';
import producto6Image from '../images/Producto 6.png';
import './CatalogoProductos.css';
import colors from '../colors';

const CatalogoProductos = () => {
  const allProductos = [
    // Definición de productos.
    {
      name: 'Bateria De Gel 12v 7ah Con Certificacion Ul',
      price: 8.999,
      image: producto1Image,
    },
    {
      name: 'Fuente Switching 12v 10a Regulada Proteccion Tira Led',
      price: 4.599,
      image: producto2Image, 
    },
    {
      name: 'Lampara Luz Led Rgb Parlante Bluetooth 220v Control Remoto',
      price: 2.399,
      image: producto3Image, 
    },
    {
      name: 'Modulo Amplificador De Audio Tda 7293 Mono 100w Rms Tda7293',
      price: 7.829,
      image: producto4Image, 
    },
    {
      name: 'Plaqueta Experimental 9cm X 7cm Simple Faz Arduino Nubbeo',
      price: 1.007,
      image: producto5Image, 
    },
    {
      name: 'Regulador Panel Solar 20a Ltc Electronics Display Lcd + Usb',
      price: 9.234,
      image: producto6Image, 
    },
];

  // Estado para el valor de búsqueda y los productos filtrados
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(allProductos);

  const handleSearchChange = (event) => {
    const value = event.target.value.trim();
    setSearchTerm(value);

    const filtered = allProductos.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Agrupa los productos filtrados en grupos de tres elementos cada uno
  const groupedProducts = [];
  let currentGroup = [];
  filteredProducts.forEach((product, index) => {
    currentGroup.push(product);
    if ((index + 1) % 3 === 0 || index === filteredProducts.length - 1) {
      groupedProducts.push(currentGroup);
      currentGroup = [];
    }
  });

  return (
    <div className="productos-container" style={{ backgroundColor: colors.neutral, color: colors.dark }}>
      <h2 className='productos-title'>Productos disponibles:</h2>
      {}
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      <div className="productos-list">
        {groupedProducts.map((productRow, rowIndex) => (
          <div className="product-row" key={rowIndex}>
            {productRow.map((producto, index) => (
              <ProductCard key={index} name={producto.name} price={producto.price} image={producto.image} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogoProductos;
