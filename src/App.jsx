import { BrowserRouter, Route, Routes } from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css'
import { Navbar } from './Components/Navbar'
import Home from './Components/Home'
import Shop from './Components/Shop' 
import About from './Components/About'
import Contact from './Components/Contact'
import Collection from './Components/Collection'
import Cart from './Components/Cart'
import Shopdata from './Components/Shopdata';

function App() {
  return (
    <>
      <BrowserRouter>
       
        <Navbar /> 
        
        <Routes>
          
          <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop products={Shopdata} />} />
          <Route path='/shop' element={<Shop />} /> 
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        
        
       

      </BrowserRouter>
    </>
  )
}

export default App