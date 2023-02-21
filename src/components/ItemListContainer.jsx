import ItemList from "./ItemList";
import Data from "../data.json";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";

const ItemListContainer = () => {
  const { category } = useParams();
  const catFilter = Data.filter((elem) => elem.category === category);
  return (
    <div>
      <Center bg="grey" h="50px" color="black">
        <Heading as="h3" size="l">
          Productos por Categoría
        </Heading>
      </Center>
      {category ? <ItemList elems={catFilter} /> : <ItemList elems={Data} />}
    </div>
  );
};

export default ItemListContainer;