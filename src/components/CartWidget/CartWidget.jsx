import { Link } from 'react-router-dom';
import './CartWidget.css';

// import { CartContext } from '../../context/CartContext';
// import { useContext } from 'react';

const CartWidget = () => {
  // const [totalQuantity] = useContext(CartContext);


  return (
    <div className='cart-image-container'>
        <img className='cart-image' src='/cart.svg' alt='carrito' onClick={<Link to="/cart"/>}/>
        <strong className='cart-number'> 3 </strong>
    </div>
  )
}

export default CartWidget