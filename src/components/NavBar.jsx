import React from 'react'
import CartWidget from './CartWidget'
import { Select } from '@chakra-ui/react'

const NavBar = () => {
    return (
        <div>
            <h3>dsCommerce - Materiales para impresión 3d</h3>
            <Select placeholder='Elija una opción'>
                <option value='option1'>Quienes Somos</option>
                <option value='option2'>Productos</option>
                <option value='option3'>Novedades</option>
            </Select>
            <CartWidget />
        </div>
    )
}

export default NavBar