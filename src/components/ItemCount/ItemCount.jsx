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
            <Button onClick={decrease} variant='success'>-</Button>
            <p> {count} </p>
            <Button onClick={increase} variant='success'>+</Button>
        </div>
            <Button onClick={()=>functionAdd(count)} variant='success'> Agregar al Carrito </Button>
        </>
  )
}

export default ItemCount