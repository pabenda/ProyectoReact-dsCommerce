import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Container,
  Box,
  Textarea,
  Center,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import SendOrder from "./SendOrder";

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
      <Center bg="#D6EAF8" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Cart
        </Heading>
      </Center>
      {cart.length === 0 ? (
        <Box bg="#D6EAF8" p={4} mt={4} maxW="sm" mx="auto">
          <Text fontWeight="bold" fontSize="lg" mb={2}>
            Su carro se encuentra vacío
          </Text>
        </Box>
      ) : (
        cart.map((item) => {
          const itemSubtotal = item.price * item.quantity;

          return (
            <Container key={item.id} className="main-catalogue">
              <Card maxW="sm">
                <CardHeader>
                  <Heading size="md">{item.name}</Heading>
                </CardHeader>
                <CardBody>
                  <Text as="b">Cantidad: {item.quantity}</Text>
                  <Text>Precio Unit $ {item.price}</Text>
                  <Text>Subtotal $ {itemSubtotal.toFixed(2)}</Text>
                </CardBody>
                <CardFooter>
                  <Button
                    colorScheme="red"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    Delete from cart
                  </Button>
                </CardFooter>
              </Card>
            </Container>
          );
        })
      )}
      {cart.length > 0 && (
        <Box bg="#D6EAF8" p={4} mt={4} maxW="sm" mx="auto">
          <Text fontWeight="bold" fontSize="lg" mb={2}>
            Total de la orden: $ {total.toFixed(2)}
          </Text>
          <SendOrder />
        </Box>
      )}
    </>
  );
};

export default Cart;
