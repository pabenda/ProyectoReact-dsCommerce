import React from 'react'
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "../App.css";
import MenuDespCat from "./MenuDespCat";

const NavBar = () => {
    return (
        <div className='NavBarLoc'>
            <div className='linkMarca'>
                <Link to={"/"}>dsCommerce Impresión 3d</Link>
            </div>
            <div className='botonCatalogo'>
                <Link to={"/catalogue"}>Catálogo</Link>
            </div>
            <div className='menuDesp'>
                <MenuDespCat />
            </div>
            <div className='cartWidget'>
                <CartWidget />
                <span>(0)</span>
            </div>
        </div>
    )
}

export default NavBar