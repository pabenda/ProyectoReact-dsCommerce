import React from "react";
import elem from "../assets/filazu.png";
import {
  Center,
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Divider,
  Stack,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Item = ({ id, name, stock, category }) => {
  return (
    <div>
      <div key={id}>
        <Center p="16px">
          <Card className="tarjetapp">
            <CardBody>
              <Image borderRadius="lg" src={elem} />
              <Stack mt="3" spacing="2">
                <Heading size="md">{name}</Heading>
                <Text color="grey" fontSize="xl">
                  Category: {category}
                </Text>
                <Text color="grey" fontSize="xl">
                  Stock: {stock}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="tarjetapie">
              <Center>
                <Button variant="solid" colorScheme="green">
                  <Link to={`/item/${id}`}>Ver más info</Link>
                </Button>
              </Center>
            </CardFooter>
          </Card>
        </Center>
      </div>
    </div>
  );
};

export default Item;