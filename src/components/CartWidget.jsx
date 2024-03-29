import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";
import "../App.css";

const CartWidget = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <>
      <div>
        <Link to="/cart">
          <button className="cartButton">
            <span>Carro de Compras </span>
            <span> (</span>
            <span>{quantity}</span>
            <span> )</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default CartWidget;