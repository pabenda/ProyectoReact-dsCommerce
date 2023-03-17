import { useState } from "react";
import "../App.css";
import { collection, getFirestore, addDoc } from "firebase/firestore";

const SendOrder = () => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("No pueden existir campos vacios");
    } else {
      addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    }
    setEmail(" ");
  };

  const db = getFirestore();
  const ordersCollection = collection(db, "orden");

  const order = {
    name,
    email,
  };

  return (
    <div className="sendOrderContainer">
      <h1 className="sendOrderTitle">Comlete los datos para enviar su Orden:</h1>

      <div className="sendOrderFormContainer">
        <form onSubmit={handleSubmit} className="sendOrderForm">
          <label htmlFor="name" className="sendOrderFormLabel">
            Nombre Completo
          </label>
          <input type="text" id="name" className="sendOrderFormInput" onChange={(e) => setName(e.target.value)} />

          <label htmlFor="email" className="sendOrderFormLabel">
            Correo Electrónico
          </label>
          <input type="email" id="email" className="sendOrderFormInput" onChange={(e) => setEmail(e.target.value)} />

          <button type="submit" className="sendOrderFormButton">
            Enviar Información
          </button>
        </form>
      </div>

      <div className="sendOrderIDContainer">
        <p className="sendOrderIDLabel">Orden ID:</p>
        <mark className="sendOrderID">{orderId}</mark>
      </div>
    </div>
  );
};

export default SendOrder;

