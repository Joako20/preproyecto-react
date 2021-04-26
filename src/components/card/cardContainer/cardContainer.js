
import React, { useState, useEffect } from "react";
import './cardContainer.css';
import axios from 'axios';
import CardComponentList from '../cardComponentList/cardComponentList';
import Spinner from '../../loader/loader'
import { useParams } from "react-router";
function CardContainer() {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    const {id} = useParams()
    useEffect(() => {
        setLoading(true)
        axios.get("https://joako20.github.io/json-load/productos.json").then((res) =>{
            if(id === undefined){
                setProductos(res.data)
            }
            else{
                setProductos(res.data.filter(category => category.marca === id))
            }
            
            
        })
        setLoading(false)
    },[id])

    
    return (
        <div className="item-container">
            {loading ? <Spinner/> : <CardComponentList items={productos}/>}
        </div>
    )
}

export default CardContainer
