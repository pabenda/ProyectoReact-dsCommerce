import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LinkCatalog() {
  const [linkColor, setLinkColor] = useState('white');

  function mouseEntra() {
    setLinkColor('blue');
  }

  function mouseSale() {
    setLinkColor('white');
  }

  return (
    <div>
      <Link to={"/catalogue"} 
            style={{ color: linkColor }} 
            onMouseEnter={mouseEntra} 
            onMouseLeave={mouseSale}>Catálogo</Link>
    </div>
  );
}

export default LinkCatalog;