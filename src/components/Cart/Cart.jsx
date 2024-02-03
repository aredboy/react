import CartItem from "../CartItem/CartItem";
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Cart = () => {
  const {cart, emptyCart, total, totalQuantity} = useContext(CartContext);
  
  if(totalQuantity === 0 ) {
    return (
      <>
        <h2>No hay productos en tu carrito</h2>
        <Link to="/">Ver Productos</Link>
      </>
    );
  }
  return (
    <>
        {
          cart.map(prod => <CartItem key={prod.id} {...prod}/>)
        }
        <Card.Title>Total: $ {total} </Card.Title>
        <Button onClick={emptyCart}> Vaciar Carrito </Button>
        <br />
        <br />
        <Card.Link to="/checkout"> Finalizar Compra </Card.Link>
    </>
  )
}

export default Cart