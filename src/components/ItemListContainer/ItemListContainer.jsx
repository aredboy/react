import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { getProductos, getProductosPorCategoria } from '../../asyncmock';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [ productosB, setProductosB ] = useState([])

  const {idCategory} = useParams();

  useEffect( ()=>{
    const funcionProductos = idCategory ? getProductosPorCategoria : getProductos;

    funcionProductos(idCategory)
    .then(res => setProductosB(res))
    .catch(error => console.log(error))

  }, [idCategory])



  return (
    <div>
    <h2>Mis Productos</h2>
    <ItemList productosB={productosB}/>
    </div>
    
    )
}

export default ItemListContainer