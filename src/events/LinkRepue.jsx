import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LinkRepue() {
  const [linkColor, setLinkColor] = useState('white');

  function mouseEntra() {
    setLinkColor('blue');
  }

  function mouseSale() {
    setLinkColor('white');
  }

  return (
    <div>
      <Link to={`/category/${"Repuestos"}`} 
            style={{ color: linkColor }} 
            onMouseEnter={mouseEntra} 
            onMouseLeave={mouseSale}>Repuestos</Link>
    </div>
  );
}

export default LinkRepue;