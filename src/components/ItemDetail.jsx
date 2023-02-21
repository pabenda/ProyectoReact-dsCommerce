import {
  Center,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  CardFooter,
  Divider,
  Alert,
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
          <Center p="16px">
            <Card className="tarjetapp">
              <CardBody>
                <Image borderRadius="lg" src={elemImage} />
                <Stack mt="3" spacing="3">
                  <Heading size="md">{elem.name}</Heading>
                  <Text color="black" fontSize="xl">
                    Info: {elem.description}
                  </Text>
                  <Text color="black" fontSize="xl">
                    Categoría: {elem.category}
                  </Text>
                  <Text color="black" fontSize="xl">
                    Stock: {elem.stock}
                  </Text>
                  <Text color="black" fontSize="xl">
                    Price: $ {elem.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter className="tarjetapie">
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