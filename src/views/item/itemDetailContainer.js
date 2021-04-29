import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ItemDetail from './itemDetail'
import Spinner from '../../components/loader/loader'
import { useParams } from 'react-router'

function ItemDetailContainer() {

    const [item, setItem] = useState(null)
    const {id} = useParams()
    
    

    useEffect(() => {
        
        axios.get("https://joako20.github.io/json-load/productos.json").then(
            (res)=>{
                setItem(res.data.find(arry => arry.id === Number(id)))
            }
        )
    
        
    },[id])

        
    return (
        <div>
            
            {item === null ? <Spinner/> : <ItemDetail item={item}/>}
            
        </div>
        
    )
}

export default ItemDetailContainer
