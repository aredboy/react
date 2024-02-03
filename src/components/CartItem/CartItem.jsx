import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartItem = ({item, quantity, stock}) => {
  const {productSum, productRest} = useContext(CartContext);
  console.log(item.imgThumb, stock);
  return (
    <Card>
      <Card.Title>{item.name}</Card.Title>
      <Card.Img variant='top' src={item.imgThumb} alt={item.name} style={{width:'200px', borderRadius:'3px'}}/>
      <Card.Text> Stock: {stock} </Card.Text>
      <Card.Text> Precio: $ {item.price} </Card.Text>
      <Container>
      <Row>
        <Col>
          <Button onClick={()=>productRest(item.id)}>-</Button>
        </Col>
        <Col xs={6}>
          <Card.Text> Cantidad: {quantity} </Card.Text>
        </Col>
        <Col>
          <Button onClick={()=>productSum(item.id)}>+</Button>
        </Col>
      </Row>

    </Container>
    </Card>
  )
}

export default CartItem