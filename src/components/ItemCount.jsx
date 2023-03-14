import React, { useState } from 'react';

const ItemCount = (props) => {

  const [stock, setStock] = useState(props.stock);
  const [count, setCount] = useState(0);
  console.log(stock);

  const increment = () => {
    if (stock > 0 && count < stock) {
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
    setStock(stock + count);
    setCount(0);
  }

  return (
    <div className='textoContador'>
      <div>
        <button onClick={decrement}>-</button>
      </div>
      <div>
        {count}
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
