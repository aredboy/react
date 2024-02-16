import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore";


const Checkout = () => {
    const {cart, emptyCart, total, cachedPriceInPesos} = useContext(CartContext);

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirm, setEmailConfirm] = useState("");
    const [orderID, setOrderID] = useState("");
    const [error, setError] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        if(!name || !surname || !telephone || !email || !emailConfirm) {
            setError("Por favor complete todos los campos o retírese y no moleste!");
            return;
        }

        if(email !== emailConfirm) {
            setError("Los emails no coinciden.");
            return;
        }

        const order = {
            items: cart.map(product => ({
                id: product.item.id,
                name: product.item.name,
                quantity: product.quantity
            })),
            total: total,
            date: new Date(),
            name,
            surname,
            telephone,
            email
        }

        Promise.all(
            order.items.map( async (productOrder) => {
                // por cada producto obtengo una referencia y a partir de la misma el doc.
                const productRef = doc(db, "products", productOrder.id)
                const productDoc = await getDoc(productRef);
                const actualStock = productDoc.data().stock;
                console.log(actualStock);
                // data() me permite obtener los datos del documentos

                await updateDoc(productRef, {stock: actualStock - productOrder.quantity});
                // modifico el stock y subo la actualizacion
            })
        )//guardamos en la base de datos la orden de compra
        .then(()=> {
            addDoc(collection(db, "orders"), order)
                .then(docRef => {
                    //aca podemos meter el sweet alert para mostrar el order ID.
                    setOrderID(docRef.id);
                    emptyCart();
                })
                .catch(error => console.log("Error al crear la orden", error))
        })
        .catch(error => {
            console.log("No pudimos actualizar el stock", error);
            setError("Error al actualizar el stock")
        })
        }

  return (
    <div>
        <h2>Checkout</h2>

        <form onSubmit={submitHandler}>
            {
                cart.map(product => (
                    <div key={product.item.id}>
                        <p> {product.item.name} x {product.quantity}</p>
                        <p> $ {product.idCategory === "cepas" ? cachedPriceInPesos*product.item.price : product.item.price}</p>
                        <hr />
                    </div>
                ))
            }

            <div>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" onChange={(e)=> setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="surname">Apellido</label>
                <input type="text" id="surname" onChange={(e)=> setSurname(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="telephone">Teléfono</label>
                <input type="text" id="telephone" onChange={(e)=> setTelephone(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="emailConfirm">Confirmación de Email</label>
                <input type="email" id="emailConfirm" onChange={(e)=> setEmailConfirm(e.target.value)}/>
            </div>

            {
                error && <p style={{color:"red"}}> {error} </p>
            }

            <button> Finalizar Orden </button>

            {
                orderID && <strong> Gracias por su compra! Tu número de orden es el siguiente: {orderID} </strong>
            }
            
        </form>
    </div>
  )
}

export default Checkout