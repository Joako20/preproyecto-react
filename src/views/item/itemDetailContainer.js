import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ItemDetail from './itemDetail'
import Spinner from '../../components/loader/loader'
import { useParams } from 'react-router'
function ItemDetailContainer({match}) {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(false)
    const {id} = useParams()
    useEffect(() => {
        setLoading(true)
        axios.get("https://joako20.github.io/json-load/productos.json").then(
            (res)=>{
                setItem(res.data.find(arry => arry.id === Number(id)))
            }
        )
        setLoading(false)
        
    },[])
    
    return (
        <div>
            {loading ? <Spinner/> : <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer
