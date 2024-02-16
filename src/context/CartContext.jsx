import { useState, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
    totalQuantity: 0,
    fetchDollarValue: async () => {},
    priceInPesos: 0
});

// proveedor de contextos

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [dollarValue, setDollarValue] =useState(null);
    const [priceInPesos, setPriceInPesos] = useState(null);
    const [cachedPriceInPesos, setCachedPriceInPesos] = useState(null);

    // esta función asincrónica es para calcular el valor del dólar al momento de hacer la compra 
    // de cannabis medicinal a traves de una api.
    const fetchDollarValue = async (price) => {
    try {
        if (!price || isNaN(price)) {
            throw new Error("Invalid price value");
        }
        const response = await fetch("https://dolarapi.com/v1/dolares/blue");
        const data = await response.json();
        setDollarValue(data);
        if (data) {
            let average = (Number(data.venta) + Number(data.compra))/2;
            const newPriceInPesos = average * price;
            setPriceInPesos(newPriceInPesos);
            setCachedPriceInPesos(newPriceInPesos);
            }
    } catch (error) {
        console.log("Error fetching dollar value:", error);
        return price;
    }
};

    const addToCart = async (item, quantity, idCategory, price) => {
        await fetchDollarValue(price);
        const productExists = cart.find(prod => prod.item.id === item.id);

    if(!productExists) {
        setCart(prev => [...prev, {item, quantity, idCategory}]);
        setTotalQuantity(prev => prev + quantity);
        setTotal(prev => prev + (idCategory === "cepas" ? cachedPriceInPesos : item.price) * quantity);
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
    setTotal(prev => prev + (idCategory === "cepas" ? cachedPriceInPesos : item.price) * quantity);
    }
}

    const eliminateProduct = async (id) => {
        await fetchDollarValue(null, null);
        const eliminatedProduct = cart.find(prod => prod.item.id === id);

        if (eliminatedProduct) {
            const updatedCart = cart.filter(prod => prod.item.id !== id);
            setCart(updatedCart);
            setTotalQuantity(prev => prev - eliminatedProduct.quantity);
            setTotal(prev => prev - (eliminatedProduct.item.idCategory === "cepas" ? priceInPesos : eliminatedProduct.item.price) * eliminatedProduct.quantity);
        } else {
            console.error(`Product with ID ${id} not found in cart.`);
        }
}

const emptyCart = () => {
    setCart([]);
    setTotal(0);
    setTotalQuantity(0);
}

const productSum = async (id) => {
    const addedProduct = cart.find(prod => prod.item.id === id);
    
    if(addedProduct) {
        const {idCategory} = addedProduct;
        const updatedCart = cart.map(prod => {
            if(prod.item.id === id){
                return {...prod, quantity: prod.quantity + 1};
                } else {
                    return prod;
                }
            })
        setCart(updatedCart);
        setTotalQuantity(prev => prev + 1);
        setTotal(prev => prev + (idCategory === "cepas" ? cachedPriceInPesos : addedProduct.item.price));
    } else {
        console.error(`Product with ID ${id} not found in cart.`);
    }
}

const productRest = async (id) => {
    const removedProduct = cart.find(prod => prod.item.id === id);
    
    if (removedProduct) {
        const {idCategory} = removedProduct;
        if (removedProduct.quantity > 1) {
            const updatedCart = cart.map(prod => {
                if (prod.item.id === id) {
                    return { ...prod, quantity: prod.quantity - 1 };
                } else {
                    return prod;
                }
            });

            setCart(updatedCart);
            setTotalQuantity(prev => prev - 1);
            setTotal(prev => prev - (idCategory === "cepas" ? cachedPriceInPesos : removedProduct.item.price));
        } else {
            const updatedCart = cart.filter(prod => prod.item.id !== id);

            setCart(updatedCart);
            setTotalQuantity(prev => prev - 1);
            setTotal(prev => prev - (idCategory === "cepas" ? cachedPriceInPesos : removedProduct.item.price));
        }
    } else {
        console.error(`Product with ID ${id} not found in cart.`);
    }
};

return (
    <CartContext.Provider value={{cart, totalQuantity, total, addToCart, eliminateProduct, 
        emptyCart, productRest, productSum, fetchDollarValue, priceInPesos: cachedPriceInPesos, 
        cachedPriceInPesos}}> {children} </CartContext.Provider>
)

}


