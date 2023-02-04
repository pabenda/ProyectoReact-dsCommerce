import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div>
            <h3>dsCommerce - Materiales para impresión 3d</h3>
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Contacto</li>
            </ul>
            <CartWidget/>
        </div>
    )
}

export default NavBar