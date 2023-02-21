import React from 'react'
import { Link } from "react-router-dom";
import CartWidget from './CartWidget'
import { Select } from '@chakra-ui/react'
import "../App.css";


const NavBar = () => {
    return (
        <div className='NavBarLoc'>
            <div>
                <Link to={"/"}>dsCommerce Impresión 3d</Link>
            </div>
            <div className='botonCatalogo'>
                <Link to={"/catalogue"}>Catálogo</Link>
            </div>
            <div className='menuDesp'>
                <Select placeholder='Elija una opción'>
                    <option value='/category/${"Filamentos"}'>Filamentos</option>
                    <option value='/category/${"Impresoras"}'>Impresoras</option>
                    <option value='/category/${"Repuestos"}'>Repuestos</option>
                </Select>            </div>
            <div className='cartWidget'>
                <CartWidget />
                <span>(0)</span>
            </div>
        </div>
    )
}

export default NavBar