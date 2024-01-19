import {Link} from "react-router-dom";

const Item = ({id, nombre, precio, img}) => {
  return (
    <div>
        <img src={img} alt={nombre} style={{width:'350px', borderRadius:'3px'}} />
        <h3>Nombre: {nombre}</h3>
        <p>ID: {id}</p>
        <p>Precio: {precio}</p>
        <Link to={`/item/${id}`}> Ver Detalles</Link>
        {/* <button> Ver Detalles </button> */}
    </div>
  )
}

export default Item