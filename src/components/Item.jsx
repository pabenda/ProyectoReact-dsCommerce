import React from "react";
import elem from "../assets/filazu.png";
import { Link } from "react-router-dom";
import "../App.css";

const Item = ({ id, name, stock, category }) => {
  return (
    <div>
      <div key={id} className="item">
        <div className="card">
          <div className="card-body">
            <img src={elem} alt="" className="card-image" />
            <div className="card-content">
              <h4 className="card-title">{name}</h4>
              <span className="card-category">Cat: {category}</span>
              <br />
              <span className="card-stock">Stock: {stock}</span>
            </div>
          </div>
          <hr className="card-divider" />
          <div className="card-footer">
            <button className="card-button">
              <Link to={`/item/${id}`} className="card-link">Ver más info</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
