import React, { useState } from "react";

const ItemCount = ({ stock, max, onAdd }) => {
  console.log(onAdd);
  const [contador, setContador] = useState(1);
  console.log(contador)

  const incrementar = () => {
    if (contador < max && stock === true) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    let min = 1;
    if (contador > min && stock === true) {
      setContador(contador - 1);
    }
  };
  const handlerOnAdd = () => {
    onAdd(contador);
  };


  
  return (
    <div style={{ width: "100%", height: "100vw" }}>
    {stock === true ? <>
      <button onClick={decrementar}>-</button>
      <span>{contador}</span>
      <button onClick={incrementar}>+</button>
      <br />
      <button onClick={handlerOnAdd}>Agregar al carrito</button></> 
      : <h2>No hay stock!!!</h2>
        
    }
      
    </div>
  );
};

export default ItemCount;