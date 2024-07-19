import { assets } from "../../assets/assets"

const FoodItem = ({id,name,image,price,category,description}) => {
  return (
    <div className="w-full m-auto shadow-lg  hover:scale-105 duration-300 cursor-pointer">
      <div>
        <img src={image} alt="" className="w-full rounded"/>
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