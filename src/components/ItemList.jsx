import Item from "./Item";
import "../App.css";

const ItemList = ({ elems }) => {
  return (
    <>
      <div className="catprincipal">
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
      </div>
    </>
  );
};

export default ItemList;
