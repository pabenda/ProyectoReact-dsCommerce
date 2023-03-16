import {
  Container,
  Heading,
  Stack,
  Input,
  Button,
  Text,
  Center,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useState } from "react";

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
    <div>
      <Center>
        <Heading>Enviar Orden</Heading>
      </Center>

      <Container>
        <FormControl display="flex" flexWrap="wrap">
          <form onSubmit={handleSubmit}>
            <FormLabel>Nombre Completo</FormLabel>
            <Input size="md" flex="1" onChange={(e) => setName(e.target.value)} />
            <FormLabel ml={3}>Mail</FormLabel>
            <Input size="md" flex="1" onChange={(e) => setEmail(e.target.value)} />
            <Button colorScheme="blue" type="submit" m={5} mr={3}>
              Enviar Información
            </Button>
          </form>
        </FormControl>
      </Container>

      <Center>
        <Text as="b" m={3} fontSize="xl">
          Orden ID:{" "}
        </Text>
        <Text as="mark" fontSize="2xl">
          {orderId}
        </Text>
      </Center>
    </div>
  );
};

export default SendOrder;
