import React, { useContext, useState } from "react";
import { Card, Image } from 'semantic-ui-react'
import ItemCount from '../../components/itemCount/itemCount'
import {Link} from 'react-router-dom'
import { CartContext } from "../cart/cartContext";


function ItemDetail ({ item }){
  
  const [value, setValue] = useState(null)
  
  const {compraId,addItem,setCompraId,removeItem} = useContext(CartContext)

  const onAdd = (contador) => {
    
    setValue(contador);
    
    addItem(item,contador)
    
  };
  
  // Me renderza desde un principio si no pongo removeItem en una constante
  const onRemove = ()=>{
    removeItem(item.id)
  }
  return <>
  
  <Card>
    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{item.nombre}</Card.Header>
      <Card.Meta>
        <span className='date'>{item.marca}</span>
      </Card.Meta>
      <Card.Description>
        <p> {item.descripcion}</p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      ${item.precio}
    </Card.Content>
  </Card>
  <button onClick={onRemove}>Borrar elemento del carrito</button>
  

  {/* remplazar props al actualizar json */}
  {value ? <Link to="/cart"><button>Terminar mi compra</button></Link> : <ItemCount stock={true} max="5" onAdd={onAdd} />}

  </>
}


export default ItemDetail
