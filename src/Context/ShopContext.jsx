import React, { createContext, useState } from "react";
import todos_produtos from "../Components/Assets/todos-produtos.js";

export const ShopContext = createContext(null);


const getDefaultCart = () =>{
        let cart = {};
        for (let index = 0; index < todos_produtos.length + 1; index++){
            cart[index] = 0;
        }
        return cart;       
    }


const ShopContextProvider = (props) => {
    

    const[cartItems,setCartitems]= useState(getDefaultCart())   
    

    const addToCart = (itemId) =>
    {
        setCartitems((prev) => ({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItems);
    }
    const removeFromCart = (itemId) =>
    {
        setCartitems((prev) => ({...prev,[itemId]:prev[itemId]-1}));
    }
    
    const getTotal = () =>{
        let totalAmount = 0;
        for (const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo=todos_produtos.find((product) => product.id === Number(item));
                totalAmount += itemInfo.price * cartItems[item];
            }           
        }
        return totalAmount;
    }
    const getTotalItems = () =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {todos_produtos,cartItems,addToCart,removeFromCart,getTotal,getTotalItems};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;