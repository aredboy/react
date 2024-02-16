import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartItem = ({item, quantity, idCategory, price}) => {
  const {productSum, productRest, cachedPriceInPesos} = useContext(CartContext);

  return (
    <Card>
      <Card.Title>{item.name}</Card.Title>
      <Card.Img variant='top' src={item.imgThumb} alt={item.name} style={{width:'200px', borderRadius:'3px'}}/>
      <Card.Text> Stock: {item.stock} </Card.Text>
      <Card.Text>
        Precio: ${idCategory === "cepas" ? cachedPriceInPesos : price}
      </Card.Text>
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