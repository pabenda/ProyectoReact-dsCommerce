import {
  Center,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
  Divider,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

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
          <Center p="1rem">
            <Card className="card-main">
              <CardBody>
                <Image borderRadius="lg" src={elem.image} />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{elem.name}</Heading>
                  <Text color="blue.800" fontSize="l">
                    Detalle: {elem.description}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Categoría: {elem.category}
                  </Text>
                  <Text color="red.600" fontSize="xl">
                    Stock: {elem.stock}
                  </Text>
                  <Text color="green.600" fontSize="xl">
                    Precio: $ {elem.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter className="card-footer">
                <ItemCount
                  stock={elem.stock}
                  id={elem.id}
                  price={elem.price}
                  name={elem.name}
                />
              </CardFooter>
            </Card>
          </Center>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
