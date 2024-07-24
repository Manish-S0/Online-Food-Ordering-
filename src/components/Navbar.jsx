import { useContext } from 'react'
import { Link } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { StoreContext } from '../context/StoreContext';

const Navbar = ({setLogin}) => {
  
  const {TotalQuantity}=useContext(StoreContext)
  return (
    <nav className='navbar flex justify-between items-center px-10 z-10'>

      <Link to="/"><img src="src/assets/logo_color.png" alt="" className='w-[100px] h-[100px] logo' /> </Link>
      <ul className='navbar-menu flex gap-6 text-[20px] font-[500]'>
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-[#e06213]' : 'text-[#303b3b]'}>Home</NavLink>
        <NavLink to="/About" className={({ isActive }) => isActive ? 'text-[#e06213]' : 'text-[#303b3b]'}>About</NavLink>
        <NavLink to="/Contact" className={({ isActive }) => isActive ? 'text-[#e06213]' : 'text-[#303b3b]'}>Contact</NavLink>
      </ul>
      <div className='flex justify-center items-center gap-5 navbar-right h-10'>
        <IoMdSearch className='text-2xl w-[30px] cursor-pointer'/>

        <div className='w-[30px]  relative'>
          <Link to="/Cart"><IoMdCart className='text-2xl cursor-pointer'/></Link>
          {TotalQuantity()>0?<span className='absolute  text-white bg-red-500 rounded-full  w-5 h-4 text-sm flex justify-center items-center top-[-5px] left-2/4 '>{TotalQuantity()}</span>:null}
          
        </div>

        <VscAccount onClick={() => setLogin(true)} className='w-[30px] text-2xl relative cursor-pointer'/>
      </div>
    </nav>
  )
}

export default Navbar