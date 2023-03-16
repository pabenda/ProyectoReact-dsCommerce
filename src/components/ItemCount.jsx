import { useContext, useState } from "react";
import {
  Text,
  ButtonGroup,
  IconButton,
  Tooltip,
  Center,
  Button,
  Flex,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon, RepeatIcon } from "@chakra-ui/icons";
import { CartContext } from "../contexts/ShoppingCartContext";

const ItemCount = ({ stock, id, price, name }) => {
  const [cart, setCart] = useContext(CartContext);
  const [count, setCount] = useState(1);

  const addQty = () => {
    setCount(count + 1);
  };

  const substractQty = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(1);
  };

  const addToCart = () => {
    setCart((currItems) => {
      const isItemFound = currItems.find((item) => item.id === id);
      if (isItemFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + count };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: count, price, name }];
      }
    });
  };

  return (
    <>
      <Flex alignItems="center">
        <ButtonGroup size="sm" isAttached variant="outline">
          {count < 1 ? (
            <Tooltip label="minimum stock reached" placement="bottom">
              <IconButton icon={<MinusIcon />} isDisabled />
            </Tooltip>
          ) : (
            <IconButton icon={<MinusIcon />} onClick={substractQty} />
          )}
          <Center>
            <Button
              onClick={() => addToCart()}
              variant="solid"
              colorScheme="blue"
            >
              Add to cart: {count}
            </Button>
          </Center>
          {count < stock ? (
            <IconButton icon={<AddIcon />} onClick={addQty} />
          ) : (
            <Tooltip label="stock limit reached" placement="bottom">
              <IconButton icon={<AddIcon />} isDisabled />
            </Tooltip>
          )}
        </ButtonGroup>
        <ButtonGroup size="sm" ml={2}>
          <Tooltip label="Reset count" placement="bottom">
            <IconButton icon={<RepeatIcon />} onClick={resetCount} />
          </Tooltip>
        </ButtonGroup>
      </Flex>
    </>
  );
};

export default ItemCount;
