import Cards from '../Card/Card';
import { data } from '../../data';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import { useState, useEffect } from 'react';

const CardContainer = () => {

  // const [ count, setCount ] = useState(0);

  // useEffect( () => {
  //   setCount(count + 1);
  // }, [count])



    const products = data.map(product =>(
        <Cards key={product.id} {...product} />
      ))

  return (

    <Container fluid='xxl' style={{margin: '0 1.5rem', }}>
        
        <Row md={4} style={{gap: '1rem', margin: '0 1.5rem 0 0'}}>{products}</Row>
        
    </Container>
    
  )
}

export default CardContainer