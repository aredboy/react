import CartItem from "../CartItem/CartItem";
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Cart = () => {
  const {cart, emptyCart, total, totalQuantity, cachedPriceInPesos} = useContext(CartContext);
  
  if(totalQuantity === 0 ) {
    return (
      <>
        <h2 className="products">No hay productos en tu carrito..</h2>
        <Link to="/" className="title">Ver Productos !</Link>
      </>
    );
  }
  return (
    <>
        {cart.map(({item, quantity, idCategory}) => (
          <CartItem 
          key={item.id} 
          item={item} 
          quantity={quantity} 
          price={item.price} 
          idCategory={idCategory}
          cachedPriceInPesos={idCategory === "cepas" ? cachedPriceInPesos : null}
          />
          )
          )}
        <Card.Title>Total: $ {total} </Card.Title>
        <Button onClick={emptyCart} variant="secondary"> Vaciar Carrito </Button>
        <br />
        <br />
        <Link to="/checkout"><Button variant="success">Finalizar Compra </Button></Link>
    </>
  )
}

export default Cart