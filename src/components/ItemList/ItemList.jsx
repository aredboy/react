import Item from '../Item/Item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { data } from '../../data';

const ItemList = () => {

  const products = data.map(prod => <Item key={prod.id} {...prod}/>)


  
    return (
    <Container fluid='xxl' style={{margin: '0 1.5rem', }}>

      <Row md={4} style={{gap: '1rem', margin: '0 1.5rem 0 0'}}>{products}</Row>
    
    </Container>
  )
}

export default ItemList