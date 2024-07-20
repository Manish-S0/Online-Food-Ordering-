
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Login from '../components/Login'
const MainHeader = () => {

  const [login,setLogin] = useState(false)
  
  return (
    <>
    {login?<Login setLogin={setLogin}/>:<></>}
    <Navbar setLogin={setLogin}/>
    <section>
      
      <Outlet/>
    </section>
    <Footer/>
     
    </>
  )
}

export default MainHeader