import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LinkFila() {
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
            onMouseLeave={mouseSale}>Filamentos</Link>
    </div>
  );
}

export default LinkFila;