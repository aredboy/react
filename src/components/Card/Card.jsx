import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Cards = ( name, imgThumb, feelings, helps, negatives, thc, cbd, cbg, rating, strainType, stock) => {
  
  let imageProduct = stock < 45 ? `/public/imgSoldOut.jpg`
  : `${imgThumb}`

  return (
    <Card style={{ width: '18rem' }}>

      <Card.Img variant="top" src={imageProduct} alt={`${name}`} />

      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Efectos: {feelings}</Card.Text>
        <Card.Text>Ayuda con: {helps}</Card.Text>
        <Card.Text>Efectos adversos: {negatives}</Card.Text>
        <Card.Text>THC: {thc}</Card.Text>
        <Card.Text>CBD: {cbd}</Card.Text>
        <Card.Text>CBG: {cbg}</Card.Text>
        <Card.Text>Puntaje: {rating}</Card.Text>
        <Card.Text>Tipo: {strainType}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default Cards