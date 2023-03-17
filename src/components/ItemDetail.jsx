import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import "../App.css";

import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import productImage from "../assets/filazu.png";

const ItemDetail = ({ elems }) => {
  const { id } = useParams();

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const elemRef = doc(db, "productos", `${id}`);

    getDoc(elemRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto(snapshot.data());
      } else {
        console.log("no existe registro");
      }
    });
  }, []);

  const elemFilter = elems.filter((elem) => elem.id == id);

  return (
    <>
      {elemFilter.map((elem) => (
        <div key={elem.id}>
          <div className="center">
            <div className="cardMain">
              <div className="cardBody">
                <img className="productImage" src={productImage} />
                <div className="stack">
                  <h2 className="heading">{elem.name}</h2>
                  <p className="text">{elem.description}</p>
                  <p className="text">{elem.category}</p>
                  <p className="text">Stock: {elem.stock}</p>
                  <p className="text">Precio: $ {elem.price}</p>
                </div>
              </div>
              <hr className="divider" />
              <div className="card-footer">
                <ItemCount
                  stock={elem.stock}
                  id={elem.id}
                  price={elem.price}
                  name={elem.name}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
