import React from 'react'
import { Link } from "react-router-dom";
import Cart from "./Cart";

const CartWidget = () => {
    return (
        <div>
            <Link to="/Cart">
                <img src="../src/assets/cart.png" alt="" />
            </Link>
        </div>
    )
}

export default CartWidget