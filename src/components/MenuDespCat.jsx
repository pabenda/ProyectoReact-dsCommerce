import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuDespCat = () => {

    const [menuAbierto, setMenuAbierto] = useState(false);

    return (
        <div className="menuDesp">
            <button onClick={() => setMenuAbierto(!menuAbierto)}>Menú</button>
            {menuAbierto && (
                <div className="opcMenu">
                    <div className='opMenuItem'>
                        <Link to={`/category/${"Filamentos"}`}>Filamentos</Link>
                    </div>
                    <div className='opMenuItem'>
                        <Link to={`/category/${"Impresoras"}`}>Impresoras</Link>
                    </div>
                    <div className='opMenuItem'>
                        <Link to={`/category/${"Repuestos"}`}>Repuestos</Link>
                    </div>
                </div>
            )}
        </div>
    );
}


export default MenuDespCat