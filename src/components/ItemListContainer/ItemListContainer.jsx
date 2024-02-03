import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
// import { getProductos, getProductosPorCategoria } from '../../asyncmock';
import { useParams } from 'react-router-dom';
import { db } from '../../services/config';
import { collection, getDocs, where, query } from 'firebase/firestore';


const ItemListContainer = () => {
  const [ data, setData ] = useState([]);

  const {idCategory} = useParams();

  useEffect(() => {
    const myProducts = idCategory ? query(collection(db, "products"), 
    where("idCategory","==", idCategory)) : 
    collection(db, "products");

    getDocs(myProducts)
    .then(res => {
      const newProducts = res.docs.map(doc => {
        const data = doc.data();
        return {id: doc.id, ...data};
      })
      setData(newProducts);
    })
    .catch(error => console.log(error))
  }, [idCategory])


  // useEffect( ()=>{
  //   const funcionProductos = idCategory ? getProductosPorCategoria : getProductos;

  //   funcionProductos(idCategory)
  //   .then(res => setData(res))
  //   .catch(error => console.log(error))

  // }, [idCategory])


  return (
    <div>
    <h3>Productos</h3>
    <ItemList data={data}/>
    </div>
    
    )
}

export default ItemListContainer