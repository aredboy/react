import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className='cart-image-container'>
        <img className='cart-image' src='/cart.svg' alt='carrito'/>
        <strong className='cart-number'> 1 </strong>
    </div>
  )
}

export default CartWidget