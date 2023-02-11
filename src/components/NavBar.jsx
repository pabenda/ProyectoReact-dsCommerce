import React from 'react'
import CartWidget from './CartWidget'
import { Select } from '@chakra-ui/react'

const NavBar = () => {
    return (
        <div className='NavBarLoc'>
            <div>
                <h3>dsCommerce - Materiales para impresión 3d</h3>
            </div>
            <div className='menuDesplegable'>
                <Select placeholder='Elija una opción'>
                    <option value='option1'>Filamentos</option>
                    <option value='option2'>Impresoras</option>
                    <option value='option3'>Repuestos</option>
                </Select>
            </div>
            <div className='cartWidget'>
                <CartWidget />
                <span>(0)</span>
            </div>
        </div>
    )
}

export default NavBar