
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
const PlaceOrder = () => {

  const {CartTotal} = useContext(StoreContext)

  return (
    
    <form className='flex items-start justify-evenly  gap-[50px] mt-[100px] place-order mx-[100px]'>
      <div className='  place-order-left max-w-[40%]'>
        <p className='text-[30px] font-[600] mb-[40px] title'>Delivery Information</p>
        <div className='multifields flex gap-5'>
          <input type="text" placeholder='First Name' className='mb-[15px] w-full p-[10px] border-[1px] border-[#ccc] rounded-sm ' />
          <input type="text" placeholder='Last Name' className='mb-[15px] w-full p-[10px] border-[1px] border-[#ccc] rounded-sm ' />
        </div>
        <div className='multifields'>
          <input type="text" placeholder='street name' className='mb-[15px] w-full p-[10px] border-[1px] border-[#ccc] rounded-sm ' />
          
        </div>
        <div className='multifields flex gap-5'>
          <input type="text" placeholder='City' className='mb-[15px] w-full p-[10px] border-[1px] border-[#ccc] rounded-sm '/>
          
          <input type="text" placeholder='Zip Code' className='mb-[15px] w-full p-[10px] border-[1px] border-[#ccc] rounded-sm '/>
        </div>
        <div className='multifields'>
          <input type="text" placeholder='Phone' className='mb-[15px] w-full p-[10px] border-[1px] border-[#ccc] rounded-sm ' />
          <input type="text" placeholder='Email' className='mb-[15px] w-full p-[10px] border-[1px] border-[#ccc] rounded-sm ' />
        </div>
      </div>
      <div  className='flex-1 flex-col gap-[20px] place-order-right max-w-[30%] justify-between'>
        <h2 className='text-[30px] font-[600] mb-[40px]'>Cart Total</h2>
        <div>
          <div className='flex cart-total-details justify-between'>
            <p>Subtotal</p>
            <p>${CartTotal()}</p>
          </div>
          <hr className='my-[10px]'/>
          <div className='flex  cart-total-details justify-between'>
            <p>Shipping</p>
            <p>$0.99</p>
          </div>
          <hr className='my-[10px]'/>
          <div className='flex  cart-total-details justify-between'>
            <p > Total</p>
            <p>${CartTotal() + 0.99}</p>
          </div>
          <hr className='my-[10px]'/>
        </div>
        <Link to='/Checkout'><button className='bg-[#e06213]  py-2 px-3 text-white font-[500] rounded-md'>Proceed to Payment</button></Link>
      </div>
    </form>
  )
}

export default PlaceOrder