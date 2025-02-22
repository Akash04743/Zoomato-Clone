import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null); 

const StoreContextProvider = (props) => {

// this is cart logic i have added here
//below funtion add one prodcut by looking pro id by +1
    const [cartItems,setCartItems] = useState({})
    const addToCart = (itemId) => {
        if(!cartItems[itemId]) {
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
// same here this remove the added product by -1
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:ptrv[itemId]-1}))
    }

    useEffect(()=>{
        console.log(cartItems)
    },[cartItems])

    //here i m passing my newly created cart logic by ,
    const contextValue = { 
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart

     };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider; 
