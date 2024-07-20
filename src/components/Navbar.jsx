
import { NavLink } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";

const Navbar = ({setLogin}) => {
  return (
    <nav className='navbar flex justify-between items-center px-10 mt-[-20px]'>

      <img src="src/assets/logo_color.png" alt="" className='w-[100px] h-[100px] logo' />
      <ul className='navbar-menu flex gap-6'>
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-red-500' : ''}>Home</NavLink>
        <NavLink to="/About" className={({ isActive }) => isActive ? 'text-red-500' : ''}>About</NavLink>
        <NavLink to="/Contact" className={({ isActive }) => isActive ? 'text-red-500' : ''}>Contact</NavLink>
      </ul>
      <div className='flex gap-5 navbar-right'>
        <IoMdSearch className='text-xl '/>
        <IoMdCart className='text-xl  '/>
        <VscAccount onClick={() => setLogin(true)} className='text-xl'/>
      </div>
    </nav>
  )
}

export default Navbar