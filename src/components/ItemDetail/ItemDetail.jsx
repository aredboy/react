import 'ItemDetail.css';


const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className="contenedorItem">
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <p>ID: {id}</p>
        <p>Descripcion: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam corporis nesciunt illo, quidem, ad voluptate cupiditate minus consequuntur, magni voluptates accusantium iusto. Accusantium sed veniam unde, repellendus provident perspiciatis quas.</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail