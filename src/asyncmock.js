// const productosB = [
//     {id: "1", nombre: "Sedas", precio: 500, img: "/sedas.jpg", idCategory: "2"},
//     {id: "2", nombre: "Encendedor", precio: 800, img: "/encendedor.jpg", idCategory: "3"},
//     {id: "3", nombre: "Vaporizador Vulcan", precio: 10500, img: "/vaporizador.jpg", idCategory: "1"},
//     {id: "4", nombre: "Pikachu", precio: 5500, img: "/pikachu.jpg", idCategory: "2"},
// ]

// export const getProductos = () => {
//     return new Promise((resolve)=> {
//         setTimeout(()=>{
//             resolve(productosB);
//         }, 700)
//     })
// }

// // funcion similar pero que retorne 1 solo item

// export const getUnProducto = (id) => {
//     return new Promise(resolve => {
//         setTimeout(()=> {
//             const producto = productosB.find(prod => prod.id === id);
//             resolve(producto);
//         }, 700)
//     })
// }

// // Funcion que retorna una categoria.

// export const getProductosPorCategoria = (idCategory) => {
//     return new Promise(resolve => {
//         setTimeout( () => {
//             const ProductosCategoria = productosB.filter(prod => prod.idCategory === idCategory);
//             resolve(ProductosCategoria);
//         }, 700)
//     })
// }