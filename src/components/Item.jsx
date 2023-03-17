import React from "react";
import elem from "../assets/filazu.png";
import { Link } from "react-router-dom";
import "../App.css";

const Item = ({ id, name, stock, category }) => {
  return (
    <div>
      <div key={id} className="item">
        <div className="card">
          <div className="cardBody">
            <img src={elem} alt="" className="cardImage" />
            <div className="cardContent">
              <h4 className="cardTitle">{name}</h4>
              <span className="cardCategory">Cat: {category}</span>
              <br />
              <span>Stock: {stock}</span>
            </div>
          </div>
          <hr/>
          <div className="cardFooter">
            <button className="cardButton">
              <Link to={`/item/${id}`} className="cardLink">Ver más info</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
