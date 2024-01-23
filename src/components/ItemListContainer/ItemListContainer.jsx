import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { getProductos, getProductosPorCategoria } from '../../asyncmock';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [ data, setData ] = useState([]);

  const {idCategory} = useParams();

  useEffect( ()=>{
    const funcionProductos = idCategory ? getProductosPorCategoria : getProductos;

    funcionProductos(idCategory)
    .then(res => setData(res))
    .catch(error => console.log(error))

  }, [idCategory])


  return (
    <div>
    <h3>Productos</h3>
    <ItemList data={data}/>
    </div>
    
    )
}

export default ItemListContainer