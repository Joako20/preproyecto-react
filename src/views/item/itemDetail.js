import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const itemDetail = ({item}) => (
  
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
  
)

export default itemDetail
