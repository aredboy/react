import { useState } from 'react';



const ItemCount = ({initial, stock, functionAdd}) => {

    const [count, setContador] = useState(1);

    const increase = () => {
        if(count < stock) {
            setContador(count + 1);
        }
    }

    const decrease = () => {
        if(count > initial) {
            setContador(count - 1);
    }
    }

  return (
    <>
    <div>
        <button onClick={decrease}> - </button>
        <p> {count} </p>
        <button onClick={increase}> + </button>
    </div>
        <button onClick={()=>functionAdd(count)}> Agregar al Carrito </button>
    </>
  )
}

export default ItemCount