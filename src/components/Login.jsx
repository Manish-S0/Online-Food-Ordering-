import React from 'react'
import { assets } from '../assets/assets'

const Login = ({setLogin}) => {
  const [currState, setCurrState] = React.useState('Login')
  
  return (
    <div className='absolute z-10 w-full h-[110%] bg-[#00000080] grid'>
      
      <form className='place-self-center max-w-[350px] bg-white flex flex-col gap-5 py-10 px-10 rounded-lg text-[14px] animate-fade-in'>
        <div className='flex justify-between items-center text-black '>
          <h2 className='font-[700] text-lg'>{currState}</h2>
          <img onClick={() => setLogin(false)} src={assets.cross_icon} alt="" className='cursor-pointer w-[18px]'/>
        </div>
        <div className='flex flex-col gap-6 login'>
          {currState==='Sign up'?
          <>
          
          <input className='bg-gray-200 p-1 rounded-md border-4  border-b-[#e06213] w-[270px]' type="text" name="username" id="username" placeholder='Enter username' required/>
          </>
          :<></>}
          
          
          <input className='bg-gray-200 p-1  rounded-md border-4  border-b-[#e06213] w-[270px]' type="email" name="email" id="email" placeholder='Enter email' required/>
          
          <input className='bg-gray-200 p-1  rounded-md border-4  border-b-[#e06213] w-[270px]' type="password" name="password" id="password" placeholder='Enter password' required/>
          
          

          <button className='bg-[#e06213] w-[270px] text-white text-lg px-4 py-2 rounded-xl'>{currState==='Sign up' ? 'Sign Up' : 'Login'}</button>
          <div >
            {currState==='Login'?<span className='cursor-pointer'>Forgot password?</span>:<></>}
            
          </div>
          <div className='flex items-start gap-2'>
            {currState==='Sign up' ?<>
              <input  type="checkbox" className='mt-1' required />
              <p >By continuing, I agree to the Terms of Service and Privacy Policy</p></>:<></>
            }
            
          </div>

          <div>
            {currState==='Login' ?
            <p>Don&apos;t have an account? <span onClick={() => setCurrState('Sign up')} className='cursor-pointer text-[#e06213] font-[500]'>Sign up</span></p>
             :<p> Already have an account? <span onClick={() => setCurrState('Login')} className='cursor-pointer text-[#e06213] font-[500]'>Login</span></p>}
          </div>

        </div>
      </form>
    </div>
  )
}

export default Login