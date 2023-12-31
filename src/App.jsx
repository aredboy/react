import { NavBar } from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { data } from './components/Card/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Card/Card';

const App = () => {

  const products = data.map(product =>(
    <Cards key={product.id} {...product} />
  ))

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido al mejor club de cannabis medicinal del país!"}/>
      <>{products}</>
    </>
  )
}

export default App