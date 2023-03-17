import React, { useState } from 'react';
import LinkFila from '../events/LinkFila';
import LinkImpre from '../events/LinkImpre';
import LinkRepue from '../events/LinkRepue';

const MenuDespCat = () => {

    const [menuAbierto, setMenuAbierto] = useState(false);

    return (
        <div className="menuDesp">
            <button onClick={() => setMenuAbierto(!menuAbierto)}>Menú</button>
            {menuAbierto && (
                <div className="opcMenu">
                    <div className='opMenuItem'>
                        <LinkFila />
                    </div>
                    <div className='opMenuItem'>
                        <LinkImpre />
                    </div>
                    <div className='opMenuItem'>
                        <LinkRepue />
                    </div>
                </div>
            )}
        </div>
    );
}


export default MenuDespCat