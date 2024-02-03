// import { Link } from 'react-router-dom';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const CartWidget = () => {
  const {totalQuantity} = useContext(CartContext);


  return (
    <div className='cart-image-container'>
        <Link to="/cart">
        <img className='cart-image' src='/cart.svg' alt='carrito' />
        </Link>
        {
          totalQuantity > 0 && <strong className='cart-number'> {totalQuantity} </strong>
        }
    </div>
  )
}

export default CartWidget