import Item from '../Item/Item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ItemList = ({productosB}) => {

  const products = productosB.map(prod => <Item key={prod.id} {...prod}/>)
  
    return (
    <Container>
      <Row md={4} style={{gap: '1rem', margin: '0 1.5rem 0 0'}}>{products}</Row>
    </Container>
  )
}

export default ItemList