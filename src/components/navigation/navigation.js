import React from 'react'
import './navigation.css'
import {Link} from 'react-router-dom'
function Navigation() {
    return (
        <nav>
            <ul>
                <Link to="/about"><li>Sobre Nosotros</li></Link>
                <Link to="/contact"><li>Contacto</li></Link>
                <Link to="/cart"><li>Carrito</li></Link>
            </ul>
        </nav>
    )
}

export default Navigation
