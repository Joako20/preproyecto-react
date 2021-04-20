
import React, { useState, useEffect } from "react";
import './cardContainer.css';
import axios from 'axios';
import CardComponentList from '../cardComponentList/cardComponentList';
import Spinner from '../../loader/loader'
function CardContainer() {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios.get("https://joako20.github.io/json-load/productos.json").then(
            (res)=>{setProductos(res.data)}
        )
        setLoading(false)
    },[])

    
    return (
        <div className="item-container">
            {loading ? <Spinner/> : <CardComponentList items={productos}/>}
        </div>
    )
}

export default CardContainer
