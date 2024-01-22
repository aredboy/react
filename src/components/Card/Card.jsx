import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = ( {name, imgThumb, feelings, helps, negatives, thc, cbd, cbg, rating, strainType, stock, count, sum } ) => {

  // console.log(count);

  let imageProduct = stock < 20 ? `/public/imgSoldOut.jpg`
  : `${imgThumb}`

  return (
    <Card style={{ width: '16rem', boxShadow: '5px 5px 5px hsla(0, 0%, 0%, 0.1' }}>

      <Card.Img variant="top" src={imageProduct} alt={`${name}`} />

      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Efectos: {feelings}.</Card.Text>
        <Card.Text>Ayuda con: {helps}.</Card.Text>
        <Card.Text>Efectos adversos: {negatives}.</Card.Text>
        <Card.Text>THC: {thc}</Card.Text>
        <Card.Text>CBD: {cbd}</Card.Text>
        <Card.Text>CBG: {cbg}</Card.Text>
        <Card.Text>Puntaje: {rating}</Card.Text>
        <Card.Text>Tipo: {strainType}</Card.Text>
        <Card.Text>Stock: {stock}</Card.Text>
        <Button variant="light" onClick={sum}>Agregar al Carrito</Button>
      </Card.Body>
    </Card>
  )
}

export default Cards