import './ItemDetail.css';

const ItemDetail = ({id, name, price, imgThumb, feelings, helps, thc, cbd, cbg}) => {

  return (
    <div className="contenedorItem">
        <h2>Nombre: {name}</h2>
        <h3>Precio: ${price}</h3>
        <p>ID: {id}</p>
        <p>Provoca sensación de {feelings}.</p>
        <p>Ayuda con {helps}.</p>
        <p>Contiene THC {thc}, CBD {cbd}, CBG {cbg}.</p>
        <img src={imgThumb} alt={name} />
    </div>
  )
}

export default ItemDetail