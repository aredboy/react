import { useState } from 'react';
import { Button } from 'react-bootstrap';


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
            <Button onClick={decrease}>-</Button>
            <p> {count} </p>
            <Button onClick={increase}>+</Button>
        </div>
            <Button onClick={()=>functionAdd(count)}> Agregar al Carrito </Button>
        </>
  )
}

export default ItemCount