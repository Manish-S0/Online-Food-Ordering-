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

  const CartTotal=()=>{
    let total=0
    for (const item in cartItems){
      if (cartItems[item]>0){
        let totalinfo=food_list.find((food)=>(food._id===item))
        total+=totalinfo.price*cartItems[item]
      }
      
    }
    return total
  }
  const TotalQuantity=()=>{
    let total=0
    for (const item in cartItems){
      if (cartItems[item]>0){
        total+=cartItems[item]
      }
      
    }
    return total
  }


  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    CartTotal, 
    TotalQuantity
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;