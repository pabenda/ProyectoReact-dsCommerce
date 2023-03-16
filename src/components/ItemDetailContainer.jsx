import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const elemsCollection = collection(db, "productos");
    getDocs(elemsCollection).then((querySnapshot) => {
      const elems = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(elems);
    });
  }, []);

  return <ItemDetail elems={data} />;
};

export default ItemDetailContainer;
