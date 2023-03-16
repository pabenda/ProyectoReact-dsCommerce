import {
  Center, Card, CardBody, Button, Image, Stack, Heading, Text, CardFooter,
} from "@chakra-ui/react";
import elemImage from "../assets/filazu.png";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ elems }) => {
  const { id } = useParams();

  const elemFilter = elems.filter((elem) => elem.id == id);

  return (
    <>
      {elemFilter.map((elem) => (
        <div key={elem.id}>
          <Center p="14px">
            <Card className="tarjetapp">
              <CardBody>
                <Image borderRadius="lg" src={elemImage} />
                <Stack mt="2" spacing="0.5">
                  <Heading size="sm">{elem.name}</Heading>
                  <Text color="black" fontSize="sm" lineHeight="0.8">
                    Info: {elem.description}
                  </Text>
                  <Text color="black" fontSize="sm" lineHeight="0.8">
                    Categoría: {elem.category}
                  </Text>
                  <Text color="black" fontSize="sm" lineHeight="0.8">
                    Stock: {elem.stock}
                  </Text>
                  <Text color="black" fontSize="sm" lineHeight="0.8">
                    Precio: $ {elem.price}
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter color="black" lineHeight="1.3">
                <Text>
                  <ItemCount stock={elem.stock} />
                  <Button fontSize="xs" mx="10" colorScheme="blue" size="xs">Comprar</Button>
                </Text>
              </CardFooter>
            </Card>
          </Center>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;