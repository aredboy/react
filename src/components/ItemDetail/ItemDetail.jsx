import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { Button } from 'react-bootstrap';


const ItemDetail = ({id, name, price, imgThumb, feelings, helps, thc, cbd, cbg, stock, idCategory}) => {
  // Estado local con la cantidad de productos agregados
  const [addQuantity, setAddQuantity] = useState(0);
  const [loading, setLoading] = useState(true);
  const {addToCart,fetchDollarValue, priceInPesos} = useContext(CartContext);

  // Creamos una funcion manejadora de la cantidad
  const quantityHandler = (quantity) => {
      setAddQuantity(quantity);
  
      const item = {id, name, price, imgThumb, stock};
      addToCart(item, quantity, idCategory);
  }

  useEffect(() => {
    if(idCategory === "cepas") {
    fetchDollarValue(price).then(() => setLoading(false));
    } else {
      price;
    }}, [price]);

  return (
    <div className="contenedorItem">
        <h2>Nombre: {name}</h2>
        {
          idCategory === "cepas" ? (
              loading ? <p>Loading...</p> : <h3>Precio: $ {priceInPesos}</h3>
          ) : (
                  <h3>Precio: ${price}</h3>
              )
        }
        <p>Stock: {stock}</p>
        <p>ID: {id}</p>
        {
          idCategory === "cepas" && 
          <div>
            <p>Provoca sensación de {feelings}.</p>
            <p>Ayuda con {helps}.</p>
            <p>Contiene THC {thc}, CBD {cbd}, CBG {cbg}.</p>
          </div>
        }
        <img src={imgThumb} alt={name} />

        {
          addQuantity > 0 ? (<Link to="/cart"><Button>Terminar Compra</Button></Link>) : (<ItemCount
          functionAdd = {quantityHandler} stock={stock} initial = {1}/>) 
        }
    
    </div>
  )
}

export default ItemDetail