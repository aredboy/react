import  NavBar  from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import CardContainer from './components/CardContainer/CardContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const App = () => {


  return (
    <>
    <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
        <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
        {/* <Route path='/item/:idItem' element={<CardContainer/>}/> */}
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App