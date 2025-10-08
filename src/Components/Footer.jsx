import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <div className='container-fluid  text-white bg-dark ' varient='dark'>
      
        <div className="quick ms-5"> <Link>Quick Links</Link>
        
            <div>
                <Link ><div className='mt-3'>Home</div></Link><br />
                <Link ><div className='mt-0'> Collection</div> </Link><br />
                <Link ><div className='mt-1'> Shop</div > </Link><br />
                <Link ><div  className='mt-1'> About</div> </Link><br />
                <Link ><div  className='mt-1'>Contact</div> </Link><br />
            </div>
        
        
       </div>
      
    </div>
  )
}

export default Footer
