import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";


const ItemListContainer = () => {
  const [elems, setElems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const elemsCollection = collection(db, "productos");
    getDocs(elemsCollection).then((querySnapshot) => {
      const elems = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setElems(elems);
    });
  }, []);

  const catFilter = elems.filter((elem) => elem.category === category);

  return (
    <div>
      {category ? <ItemList elems={catFilter} /> : <ItemList elems={elems} />}
    </div>
  );
};

export default ItemListContainer;