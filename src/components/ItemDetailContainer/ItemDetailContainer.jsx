import { useState, useEffect } from "react";
// import { getUnProducto } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { getDoc, doc } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);    
    const {idItem} = useParams();

    useEffect(()=>{
        const newDoc = doc(db, "products", idItem);

        getDoc(newDoc)
        .then(res => {
            const data = res.data();
            const newProduct = {id: res.id, ...data};
            setProducto(newProduct);

        })
        .catch(error => console.log("cualquiera", error))
    }, [idItem])


    // useEffect( () => {
    //     getUnProducto(idItem)
    //     .then(res => setProducto(res))
    // }, [idItem])
  

    return (
    <div>
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer