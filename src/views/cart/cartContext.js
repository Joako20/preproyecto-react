import React, {createContext,useEffect, useState } from 'react'


export const CartContext = createContext("default");

export function CartProvider({children}) {



    const [compraId, setCompraId] = useState([])
    console.log("carrito log:", compraId)
    
        
    function addItem(item,quantity){
        console.log("carrito:", compraId)
        let existId = false
        if(compraId.length === 0){
            console.log("Se ejecuta si array vacio")
            compraId.push({item,quantity})
            console.log("carrito:", compraId)
            
        }
        else{
            console.log("Se ejecuta si array tiene productos")
            console.log(existId)
            compraId.map((producto)=>{
                    if(producto.item.id === item.id){
                        existId = true
                        console.log(existId)
                    } 
                })

            if(existId){
                existId = false
                console.log(existId)
            }
            else{
                compraId.push({item,quantity})
            }
        }

        console.log("carrito:", compraId)


        // compraId.map((producto)=>{
        //     if(producto.item.id === item.id){
        //         console.log("no se ejecuta nada")
        //     }
        //     else{
        //         compraId.push({item,quantity})
        //         console.log("carrito:", compraId)
        //     }
        //     console.log(producto)
        // })
        // compraId.push({item,quantity})
        return

    }
    function removeItem(itemId){
        console.log("carrito:", compraId)
        compraId.map((producto)=>{
            if(producto.item.id === itemId){
                compraId.splice(compraId.indexOf(producto),1)
            }
        })
        console.log("carrito:", compraId)
        return

    }

    function clear(){
        console.log("carrito:", compraId)
        setCompraId([])
    }
    
    return (
    <CartContext.Provider value={{
        compraId,addItem,setCompraId,removeItem,clear
    }}>
        {children}
    </CartContext.Provider>
    );
}

export default CartProvider
