import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext'


const Cart = () => {
  const {cartItems,food_list,removeFromCart,CartTotal} = useContext(StoreContext)
  return (
    <div className='mt-100px mx-10 cart text-gray-600'>
      <div className='cart-items' >
        <div className='grid  items-center font-[500] text-gray-600 cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantitiy</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className='border-[2px]'/>
        {food_list.map((food) => {
          if (cartItems[food._id]>0) {
            return(
              <div key={food._id}>
                <div  className='grid grid-cols-6 items-center my-2 cart-items-item'>
                  <img src={food.image} alt="" className='w-[50px]'/>
                  <p>{food.name}</p>
                  <p>${food.price}</p>
                  <p>{cartItems[food._id]}</p>
                  <p>${food.price * cartItems[food._id]}</p>
                  <p><button onClick={() => removeFromCart(food._id)} className=' text-[#e06213]'>X</button></p>
                </div>
                <hr className='border-[2px]'/>
              </div>
            )
          }
        })}
        
      </div>
      <div className='flex  mt-12 justify-between cart-bottom gap-10'>
        <div className='flex-1 flex-col gap-[20px] cart-total'>
          <h2 className='font-[800] text-black'>Cart Total</h2>
          <div>
            <div className='flex justify-between cart-total-details'>
              <p>Subtotal</p>
              <p>${CartTotal()}</p>
            </div>
            <hr className='my-[10px]'/>
            <div className='flex justify-between cart-total-details'>
              <p>Shipping</p>
              <p>$0.99</p>
            </div>
            <hr className='my-[10px]'/>
            <div className='flex justify-between cart-total-details'>
              <p > Total</p>
              <p>${CartTotal() + 0.99}</p>
            </div>
            <hr className='my-[10px]'/>
          </div>

          <Link to='/Checkout'><button className='bg-[#e06213]  py-2 px-3 text-white font-[500] rounded-md'>Checkout</button></Link>
        </div>
        <div className='flex-1 cart-promocode'>
          <div>
            <p>Promo Code</p>
            <div>
              <input type="text" placeholder="enter promo code" id="" className='p-2 '/>
              <button className='bg-[#e06213]  py-2 px-5 text-white font-[500] rounded-md'>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart