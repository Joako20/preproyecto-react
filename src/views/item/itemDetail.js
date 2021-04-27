import React, { useContext, useState } from "react";
import { Card, Image } from 'semantic-ui-react'
import ItemCount from '../../components/itemCount/itemCount'
import {Link} from 'react-router-dom'
import { CartContext } from "../cart/cartContext";


function ItemDetail ({ item }){
  
  const valueC = useContext(CartContext)
  console.log(valueC)
  
  
  const [value, setValue] = useState(null)
  
  const onAdd = (contador) => {
    console.log(contador)
    setValue(contador);
  };
  
  
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
  <h1>{valueC}</h1>
  {/* remplazar props al actualizar json */}
  {value ? <Link to="/cart"><button>Terminar mi compra</button></Link> : <ItemCount stock={true} max="5" onAdd={onAdd} />}

  </>
}


export default ItemDetail
