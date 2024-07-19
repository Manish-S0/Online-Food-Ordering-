
import { NavLink } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-10 mt-[-20px]'>

      <img src="src/assets/logo_color.png" alt="" className='w-[100px] h-[100px]' />
      <ul className='flex gap-6'>
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-red-500' : ''}>Home</NavLink>
        <NavLink to="/About" className={({ isActive }) => isActive ? 'text-red-500' : ''}>About</NavLink>
        <NavLink to="/Contact" className={({ isActive }) => isActive ? 'text-red-500' : ''}>Contact</NavLink>
      </ul>
      <div className='flex gap-5'>
        <IoMdSearch className='text-xl'/>
        <IoMdCart className='text-xl'/>
        <VscAccount className='text-xl'/>
      </div>
    </nav>
  )
}

export default Navbar