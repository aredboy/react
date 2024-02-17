import {Link} from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";

const Item = ({id, name, price, imgThumb, stock}) => {

  let imageProduct = stock < 20 ? `/public/imgSoldOut.jpg`
  : `${imgThumb}`

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
    
    <Card variant="top" style={{backgroundColor:'#deeeff'}} src={imageProduct} alt={`${name}`} >
        <Card.Img src={imgThumb} alt={name} style={{width:'200px', borderRadius:'3px'}} />
        <Card.Title>Nombre: {name}</Card.Title>
        <Card.Text >ID: {id}</Card.Text>
        <Card.Text>Precio: ${price}</Card.Text>
        <Card.Text>Stock: {stock}u</Card.Text>
        <Link to={`/item/${id}`}> 
          <Button variant="flat" size="l">Ver Detalles</Button>
        </Link>
    </Card>
    </>
  )
}

export default Item