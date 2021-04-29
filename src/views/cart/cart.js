import React, { useContext } from 'react'
import {CartContext} from './cartContext'
function Cart() {
    const { clear } = useContext(CartContext)
    return (
        <div>
            <h2>Este es el carrito</h2>
            <button onClick={clear}>Borrar carrito</button>

        </div>
    )
}

export default Cart
