import { assets } from "../../assets/assets"
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'


const FoodItem = ({id,name,image,price,description}) => {
  
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)

  return (
    <div className="w-full m-auto shadow-lg  hover:scale-105 duration-300 cursor-pointer">
      <div className="relative">
        <img src={image} alt="" className="w-full rounded"/>
        {!cartItems[id] ?
         <img onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" className="cursor-pointer w-[30px] py-1 absolute bottom-1 right-2 rounded-full"/> : 
        <div className="flex gap-2 absolute bottom-1 right-2 rounded-full items-center px-1 bg-white">
          <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" className="w-[30px] py-1 cursor-pointer "/>
          <p className="text-xl font-[500]">{cartItems[id]}</p>
          <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" className="w-[30px] py-1 cursor-pointer"/>
        </div>
        }
      </div>
      <div className="pl-3 py-2">
        <div className="">
          <p className="text-xl font-[500]">{name}</p>
          <img src={assets.rating_starts} alt="" className="w-[70px] py-1"/>
        </div>
        <p className="text-sm font-[500] text-[#676767]">{description}</p>
        <p className="text-xl font-[500] text-red-500">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem