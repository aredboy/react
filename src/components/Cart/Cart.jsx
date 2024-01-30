import CartItem from "../CartItem/CartItem";
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Modal } from 'react-bootstrap';
import { useState } from "react";


const Cart = () => {
  const [cart, emptyCart, total, totalQuantity] = useContext(CartContext);

  // const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  
    // setFullscreen(breakpoint);
  // function handleShow(breakpoint) {
  //   setShow(true);
  // }

  if(totalQuantity === 0 ) {
    <>
    <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body className='grid'>
          <h2>No hay productos en tu carrito</h2>
          <Link to="/">Ver Productos</Link>
      </Modal.Body>
      </Modal>
    </>
  }
  return (
    <div>
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body className='grid'>
          {
            cart.map(prod => <CartItem key={prod.id} {...prod}/>)
          }
          <h3>Total: $ {total} </h3>
          <button onClick={()=> emptyCart()}> Vaciar Carrito </button>
          <Link to="/checkout"> Finalizar Compra </Link>
        </Modal.Body>
      </Modal>

    </div>
  )
}

export default Cart