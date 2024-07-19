import { createContext } from "react";
import { useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext()

const StoreContextProvider = (props) => {
  const [cartItems,setCartItems]=useState([])

  const addToCart = (item) => {
    if (!cartItems[item]){
      setCartItems(prev=>({...prev,[item]:1}))
      }
      else
      {
        setCartItems(prev=>({...prev,[item]:prev[item]+1}))
      }
  }
  const removeFromCart = (item) => {
    setCartItems(prev=>({...prev,[item]:prev[item]-1}))
  }


  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart 
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;