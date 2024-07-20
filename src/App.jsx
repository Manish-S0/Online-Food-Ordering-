import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Error from "./pages/Error"
import About from "./pages/About"
import Contact from "./pages/Contact"
import MainHeader from "./pages/MainHeader"

const App = () => {

  
  return (
    
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<MainHeader />}>
          <Route index element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Route>
        <Route path="/Cart" element={<Cart/>}/>

        <Route path="/*" element={<Error/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App