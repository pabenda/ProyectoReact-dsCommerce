import { useState, useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import SendOrder from "./SendOrder";
import "../App.css";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const handleDeleteItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <>
      <header className="encabezado-carro">
        <h2>Carro de Compras</h2>
      </header>
      {cart.length === 0 ? (
        <div className="carro-vacio">
          <p>Su carro se encuentra vacío</p>
        </div>
      ) : (
        cart.map((item) => {
          const itemSubtotal = item.price * item.quantity;

          return (
            <div key={item.id} className="cart-container">
              <div>
                <h4>{item.name}</h4>
              </div>
              <div className="detalles-articulo">
                <div>
                  <p>{`Precio Unit $${item.price}`}</p>
                  <p>{`Subtotal $${itemSubtotal.toFixed(2)}`}</p>
                </div>
                <p>{`Cantidad: ${item.quantity}`}</p>
              </div>
              <div>
                <button className="delete-button" onClick={() => handleDeleteItem(item.id)}>
                  Eliminar artículo
                </button>
              </div>
            </div>
          );
        })
      )}
      {cart.length > 0 && (
        <div className="cart-total">
          <p className="total-message">{`Total de la orden: $${total.toFixed(2)}`}</p>
          <SendOrder />
        </div>
      )}
    </>
  );
};

export default Cart;
