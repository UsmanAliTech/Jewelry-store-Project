import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css'
import { Navbar } from './components/Navbar' 
import Home from './components/Home'
import Shop from './components/Shop' 
import About from './components/About'
import Contact from './components/Contact'
import Collection from './components/Collection'
import Cart from './components/Cart'
import Navbar2 from './Components/Navbar2';
import Scrooltop from './Components/Scrooltop';
import Ringdata from './Components/Ringdata';
import Shopdata from './components/Shopdata';
import Ring from './Components/Ring';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/home' element={<Home />} />
          <Route path='/shop' element={<Shop products={Shopdata} />} /> 
          <Route path='/rings' element={<Ring />} /> 
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
