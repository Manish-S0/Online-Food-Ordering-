import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({category}) => {
  const {food_list} = useContext(StoreContext) 

  return (
    <div className='mx-10 my-4 text-[#303b3b]'>
      <h1 className='text-4xl mb-4 font-bold'>Top dishes near you</h1>
      <div className='grid  xs:grid-cols-2 xxs:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:grid-cols-5 lg:gap-8 grid-cols-5'>
        {
          food_list.map((food) => {
            if (food.category === category || category === 'All'){
              return (
                <FoodItem key={food._id} id={food._id} name={food.name} image={food.image} price={food.price}  description={food.description}/>
              )
            }

            
          }  
          )
          
        }
      </div>
    </div>
  )
}

export default FoodDisplay