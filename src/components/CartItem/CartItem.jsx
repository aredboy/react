import React from 'react'

const CartItem = ({item, quantity}) => {
  return (
    <div>
      <h3>{item.nombre}</h3>
      <p> Cantidad: {quantity} </p>
      <p> Precio: $ {item.price} </p>

    </div>
  )
}

export default CartItem