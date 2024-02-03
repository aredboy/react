import { useEffect } from "react";
import { db } from "../../services/config";
import { collection, doc, setDoc } from "firebase/firestore";


const CargarJSON = () => {

    useEffect (()=> {
        const loadAnArchive = async() => {
            try {
                const res = await fetch("./products.json");
                console.log(res);
                const jsonData = await res.json();

                jsonData.forEach( async(product) => {
                    const productDoc = doc(collection(db, "products"), product.id.toString());
                    await setDoc(productDoc, product);
                })
            } catch (error) {
                console.log("que dios nos ayude", error);
            }
        }
        loadAnArchive();
    }, [])



  return (
    <div>CargarJSON</div>
  )
}

export default CargarJSON