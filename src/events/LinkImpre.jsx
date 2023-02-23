import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LinkImpre() {
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
            onMouseLeave={mouseSale}>Impresoras</Link>
    </div>
  );
}

export default LinkImpre;