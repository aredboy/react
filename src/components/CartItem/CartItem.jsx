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
    <>
    <style type="text/css">
      {`
  .btn-flat {
    background-color: #D3A66B;
    color: #deeeff;
  }
  .btn-flat:hover {
    color: green;
  }

  .btn-l {
    padding: .5rem 1rem;
    font-size: 1rem;
  }

  .card-text {
    font: poppins;
    color: #003300;
  }
  .card-title {
    font: poppins;
    color: #005900;
  }
  `}
    </style>
    <Card style={{backgroundColor:'#deeeff'}}>
      <Card.Title>{item.name}</Card.Title>
      <Card.Img variant='top' src={item.imgThumb} alt={item.name} style={{width:'200px', borderRadius:'3px'}}/>
      <Card.Text> Stock: {item.stock} </Card.Text>
      <Card.Text>
        Precio: ${idCategory === "cepas" ? cachedPriceInPesos : price}
      </Card.Text>
      <Container>
      <Row>
        <Col>
          <Button onClick={()=>productRest(item.id)} variant='secondary'>-</Button>
        </Col>
        <Col xs={4}>
          <Card.Text> Cantidad: {quantity} </Card.Text>
        </Col>
        <Col>
          <Button onClick={()=>productSum(item.id)} variant='secondary'>+</Button>
        </Col>
      </Row>

    </Container>
    </Card>
    </>
  )
}

export default CartItem