import React from 'react'
import './navigation.css'
import {Link} from 'react-router-dom'
function Navigation() {
    return (
        <nav>
            <ul>
                <Link to="/category/Xbox"><li>Xbox</li></Link>
                <Link to="/category/Playstation"><li>Playstation</li></Link>
                <Link to="/cart"><li>Carrito</li></Link>
            </ul>
        </nav>
    )
}

export default Navigation
