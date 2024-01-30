import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({id, name, price, imgThumb, feelings, helps, thc, cbd, cbg, stock}) => {
  // Creamos un estado local con la cantidad de productos agregados
  const [addQuantity, setAddQuantity] = useState(0);
  const {addToCart} = useContext(CartContext);

  // Creamos una funcion manejadora de la cantidad
  const quantityHandler = (quantity) => {
    setAddQuantity(quantity);
    // console.log("Productos agregados "+ quantity);
  
      const item = {id, name, price};
      addToCart(item, quantity);
  }

  return (
    <div className="contenedorItem">
        <h2>Nombre: {name}</h2>
        <h3>Precio: ${price}</h3>
        <p>Stock: {stock}</p>
        <p>ID: {id}</p>
        <p>Provoca sensación de {feelings}.</p>
        <p>Ayuda con {helps}.</p>
        <p>Contiene THC {thc}, CBD {cbd}, CBG {cbg}.</p>
        <img src={imgThumb} alt={name} />

        {/* aca empleamos la logica de montaje y desmontaje del contador */}
        {
          addQuantity > 0 ? (<Link to="/cart">Terminar Compra</Link>) : (<ItemCount 
            initial = {1} stock = {stock} functionAdd = {quantityHandler} />)
        }
    
    </div>
  )
}

export default ItemDetail