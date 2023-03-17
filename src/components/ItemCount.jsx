import { useContext, useState } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import "../App.css";

const ItemCount = ({ stock, id, price, name }) => {
  const [cart, setCart] = useContext(CartContext);
  const [count, setCount] = useState(1);

  const addQty = () => {
    setCount(count + 1);
  };

  const substractQty = () => {
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
      <div className="item-count">
        <button
          className="item-count__boton"
          disabled={count < 1}
          onClick={substractQty}
        >
          -
        </button>
        <span className="item-count__contador">{count}</span>
        <button
          className="item-count__boton"
          disabled={count >= stock}
          onClick={addQty}
        >
          +
        </button>
        <button className="item-count__boton" onClick={resetCount}>
          Reset
        </button>
        <button
          className="item-count__agrega"
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