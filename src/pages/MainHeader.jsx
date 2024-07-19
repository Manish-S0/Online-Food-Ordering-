
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
const MainHeader = () => {
  return (
    <>
    <Navbar/>
    <section>
      
      <Outlet/>
    </section>
    
    
    </>
  )
}

export default MainHeader