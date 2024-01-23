import './CartWidget.css';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

const CartWidget = ({count}) => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  let counter = `${count}`

  return (
    <div className='cart-image-container'>
        <img className='cart-image' src='/cart.svg' alt='carrito' onClick={()=> handleShow()}/>
        <strong className='cart-number'> {counter} </strong>
        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body className='grid'>Pedido</Modal.Body>
      </Modal>
    </div>
  )
}

export default CartWidget