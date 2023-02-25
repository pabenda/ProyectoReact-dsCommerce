import Item from "./Item";
import { Container } from "@chakra-ui/react";
const ItemList = ({ elems }) => {
  return (
    <>
      <Container maxW="container.md" className="catprincipal">
        {elems?.map((elem) => (
          <Item
            key={elem.id}
            id={elem.id}
            name={elem.name}
            description={elem.description}
            price={elem.price}
            stock={elem.stock}
            category={elem.category}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;