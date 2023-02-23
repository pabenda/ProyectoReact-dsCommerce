import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function linkBrand() {
  const [linkColor, setLinkColor] = useState('white');

  function mouseEntra() {
    setLinkColor('blue');
  }

  function mouseSale() {
    setLinkColor('white');
  }

  return (
    <div>
      <Link to={"/"} 
            style={{ color: linkColor }} 
            onMouseEnter={mouseEntra} 
            onMouseLeave={mouseSale}>dsCommerce Impresión 3d</Link>
    </div>
  );
}

export default linkBrand;