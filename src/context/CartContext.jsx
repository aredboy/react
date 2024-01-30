import { useState, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
    totalQuantity: 0
})

// proveedor de contextos

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    console.log(cart);
    console.log("Monto total de la compra: ", total);
    console.log("Cantidad de items: ", totalQuantity);

    const addToCart = (item, quantity) => {
        const productExists = cart.find(prod => prod.item.id === item.id);

    if(!productExists) {
        setCart(prev => [...prev, {item, quantity}]);
        setTotalQuantity(prev => prev + quantity);
        setTotal(prev => prev + (item.price * quantity));
    } else {
        const updatedCart = cart.map(prod => {
            if(prod.item.id === item.id) {
                return {...prod, quantity: prod.quantity +
                    quantity};
                } else {
                    return prod;
                }
            })
            setCart(updatedCart);
            setTotalQuantity(prev => prev + quantity);
            setTotal(prev => prev + (item.price * quantity));
        
    }
}

    const eliminateProduct = (id) => {
        const eliminatedProduct = cart.find(prod => prod.item.id === id);
        
        const updatedCart = cart.filter(prod => prod.item.id !== id);

        setCart(updatedCart);
        setTotalQuantity(prev => prev - eliminatedProduct.quantity);
        setTotal(prev => prev - (eliminatedProduct.item.price * eliminatedProduct.quantity));
    }

    const emptyCart = () => {
        setCart([]);
        setTotal(0);
        setTotalQuantity(0);
    }

    // const productSum = (id) => {
    //     const addedProduct = cart.find(prod => prod.item.id === id);

    //     if(addedProduct) {
    //     const updatedCart = cart.map(prod => {
    //         if(prod.item.id === id){
    //             return {...prod, quantity: prod.quantity + 1};
    //             } else {
    //                 return prod;
    //             }
    //         })
    //         setCart(updatedCart);
    //         setTotalQuantity(prev => prev + 1);
    //         setTotal(prev => prev + (addedProduct.item.price));
    //     }
    // }

    // const productRest = (id) => {
    //     const removedProduct = cart.find(prod => prod.item.id === id);
    
    //     if (removedProduct && removedProduct.quantity > 1) {
    //         const updatedCart = cart.map(prod => {
    //             if (prod.item.id === id) {
    //                 return { ...prod, quantity: prod.quantity - 1 };
    //             } else {
    //                 return prod;
    //             }
    //         });
    
    //         setCart(updatedCart);
    //         setTotalQuantity(prev => prev - 1);
    //         setTotal(prev => prev - removedProduct.item.price);
    //     } else if (removedProduct && removedProduct.quantity === 1) {
    //         const updatedCart = cart.filter(prod => prod.item.id !== id);
    
    //         setCart(updatedCart);
    //         setTotalQuantity(prev => prev - 1);
    //         setTotal(prev => prev - removedProduct.item.price);
    //     }
    // };

    return (
        <CartContext.Provider value={{cart, totalQuantity, total, addToCart, eliminateProduct, 
            emptyCart}}> {children} </CartContext.Provider>
    )

}


