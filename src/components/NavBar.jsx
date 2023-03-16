import React from 'react'
import { Link } from "react-router-dom";
import LinkBrand from '../events/LinkBrand';
import LinkCatalog from '../events/LinkCatalog';
import CartWidget from "./CartWidget";
import "../App.css";
import MenuDespCat from "./MenuDespCat";

const NavBar = () => {
    return (
        <div className='NavBarLoc'>
            <div className='linkMarca'>
                <LinkBrand />
            </div>
            <div className='botonCatalogo'>
                <LinkCatalog />
            </div>
            <div className='menuDesp'>
                <MenuDespCat />
            </div>
            <div className='cartWidget'>
                <CartWidget />
            </div>
        </div>
    )
}

export default NavBar