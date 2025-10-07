import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css'
import { Navbar } from './Components/Navbar'
import Home from './Components/Home'
import Shop from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Collection from './Components/Collection'
import Cart from './Components/Cart'
function App() {
  return (
    <>
    <BrowserRouter>
        
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Shop' element={<Shop />} />
            <Route path='/Collection' element={<Collection />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Cart' element={<Cart />} />
          </Routes>
       
      </BrowserRouter>
    </>
  )
}


export default App
