import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({category}) => {
  const {food_list} = useContext(StoreContext) 

  return (
    <div className='mx-10 my-4'>
      <h1 className='text-4xl mb-4 font-bold'>Top dishes near you</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:grid-cols-5 lg:gap-8'>
        {
          food_list.map((food) => (
            <FoodItem key={food._id} id={food._id}name={food.name} image={food.image}price={food.price}category={food.category} description={food.description}/>
          )
          )
        }
      </div>
    </div>
  )
}

export default FoodDisplay