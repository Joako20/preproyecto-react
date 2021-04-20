import React from 'react'
import CardComponent from '../cardComponent/cardComponent'
import {Link} from 'react-router-dom'
function cardComponentList({items}) {
    console.log(items)
    return <>
    {
        items.map(
            (item)=>{
                return<>
                <Link to={`/item/${item.id}`}>
                    <CardComponent key={item.id} item={item}/>
                </Link>
                
                </>
            }
        )
    }
    </>
    
}

export default cardComponentList
