import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Success from "./pages/Success"
import Error from "./pages/Error"
import About from "./pages/About"
import Contact from "./pages/Contact"
import MainHeader from "./pages/MainHeader"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHeader/>}>
          <Route index element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Route>
        <Route path="/success" element={<Success/>}/>

        <Route path="/*" element={<Error/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App