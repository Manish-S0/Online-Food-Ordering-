
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <div className='bg-[#323232]  flex flex-col  gap-3 pt-[80px] text-[#c1bbbb] mt-[60px]'>
      <div className='flex justify-evenly w-5/6 gap-10'>
        <div className=''>
          <img src={assets.logo_color} alt="" className='w-[100px] rounded-full cursor-pointer'/>
          <p className='pt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <div className='flex gap-3 py-2'>
            <img src={assets.facebook_icon} alt="" className='cursor-pointer'/>
            <img src={assets.twitter_icon} alt="" className='cursor-pointer'/>
            
            <img src={assets.linkedin_icon} alt="" className='cursor-pointer'/>
          </div>
        </div>
        <div>
          <h2 className='text-2xl text-white font-[500]'>Company</h2>
          <ul >
            <li><Link to='/'>Home </Link></li>
            <li><Link to='/About'>About </Link></li>
            
            <li> <Link to='/Contact'>Contact </Link></li>
            
            
          </ul>
        </div>
        <div>
          <h2 className='text-2xl text-white font-[500]'>Get in touch</h2>
          <ul>
            <li>+1 123 456 7890</li>
            <li>contact@bhojan.com</li>
          </ul>
        </div>
      </div>
      <hr className='mx-10 h-1'/>
      <p className='text-center pb-2'>Copyright © 2022. All rights reserved.</p>
    </div>
  )
}

export default Footer