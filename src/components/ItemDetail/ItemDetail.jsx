import './ItemDetail.css';


const ItemDetail = ({id, name, price, imgThumb}) => {


  return (
    <div className="contenedorItem">
        <h2>Nombre: {name}</h2>
        <h3>Precio: ${price}</h3>
        <p>ID: {id}</p>
        <p>Descripcion: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam corporis nesciunt illo, quidem, ad voluptate cupiditate minus consequuntur, magni voluptates accusantium iusto. Accusantium sed veniam unde, repellendus provident perspiciatis quas.</p>
        <img src={imgThumb} alt={name} />
    </div>
  )
}

export default ItemDetail