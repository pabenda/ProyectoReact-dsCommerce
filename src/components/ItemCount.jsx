import { useContext, useState } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import "../App.css";

const ItemCount = ({ stock, id, price, name }) => {
  const [cart, setCart] = useContext(CartContext);
  const [count, setCount] = useState(1);

  const sumarQ = () => {
    setCount(count + 1);
  };

  const restarQ = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(1);
  };

  const addToCart = () => {
    setCart((currItems) => {
      const isItemFound = currItems.find((item) => item.id === id);
      if (isItemFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + count };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: count, price, name }];
      }
    });
  };

  return (
    <>
      <div className="itemCount">
        <button
          className="itemCountBoton"
          disabled={count < 1}
          onClick={restarQ}
        >
          -
        </button>
        <span className="itemCountContador">{count}</span>
        <button
          className="itemCountBoton"
          disabled={count >= stock}
          onClick={sumarQ}
        >
          +
        </button>
        <button className="itemCountBoton" onClick={resetCount}>
          Reset
        </button>
        <button
          className="itemCountAgrega"
          onClick={addToCart}
          disabled={count < 1 || count > stock}
        >
          Agregar al Carro
        </button>
      </div>
    </>
  );
};

export default ItemCount;