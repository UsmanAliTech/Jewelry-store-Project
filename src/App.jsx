import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Note: I removed 'Router' as it's an alias and usually not needed with BrowserRouter.
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css'
import { Navbar } from './Components/Navbar'
import Home from './Components/Home'
import Shop from './Components/Shop' // Changed from Home to Shop for clarity
import About from './Components/About'
import Contact from './Components/Contact'
import Collection from './Components/Collection'
import Cart from './Components/Cart'
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Components that should show on ALL pages go here: */}
        <Navbar /> 
        
        <Routes>
          {/* Only Route components belong inside Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/Shop' element={<Shop />} /> 
          <Route path='/Collection' element={<Collection />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
        
        {/* The Footer should go here, outside of Routes, to display on all pages */}
        <Footer/>

      </BrowserRouter>
    </>
  )
}

export default App