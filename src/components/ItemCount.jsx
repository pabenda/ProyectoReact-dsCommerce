import React, { useState } from 'react';

const ItemCount = () => {
  const [stock, setStock] = useState(10);
  const [count, setCount] = useState(0);

  const increment = () => {
    if (stock > 0) {
      setStock(stock - 1);
      setCount(count + 1);
    }
  }

  const decrement = () => {
    if (count > 0) {
      setStock(stock + 1);
      setCount(count - 1);
    }
  }

  const reset = () => {
    setStock(10);
    setCount(0);
  }

  return (
    <div className='textoContador'>
      <div>
        <button onClick={decrement}>-</button>
      </div>
      <div>
        <p> {count}</p>
      </div>
      <div>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default ItemCount;
