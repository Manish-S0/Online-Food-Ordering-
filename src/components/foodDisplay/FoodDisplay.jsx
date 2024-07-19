
import { StoreContext } from '../../context/StoreContext'

const FoodDisplay = ({category}) => {
  const {food_list} = React.useContext(StoreContext) 
  
  return (
    <div>
      <h1>Top dishes near you</h1>
    </div>
  )
}

export default FoodDisplay