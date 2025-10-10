import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaWhatsapp, FaGithub } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer-main text-white bg-dark pt-5 mb-0 pb-3'>
      <div className="container">
        <div className="row">
          
          {/* LOGO COLUMN */}
          <div className="col-lg-3 col-md-6 footer-col logo-col">
            <img
              src="public/download66.png"
              alt="Aurora Jewels Logo"
              className='footer-logo'
            />
          </div>

          {/* SHOP COLUMN */}
          <div className="col-lg-3 col-md-6 footer-col">
            <p className='fw-bold lead footer-heading'>SHOP</p>
            <ul className='list-unstyled footer-links'>
              <li><Link to="/shop">Necklaces</Link></li>
              <li><Link to="/shop">Rings</Link></li>
              <li><Link to="/shop">Earrings</Link></li>
              <li><Link to="/shop">Collection</Link></li>
              <li><Link to="/shop">Gift Guide</Link></li>
              <li><Link to="/shop">Bracelets</Link></li>
            </ul>
          </div>

          {/* QUICK LINKS COLUMN */}
          <div className="col-lg-3 col-md-6 footer-col">
            <p className='fw-bold lead footer-heading'>QUICK LINKS</p>
            <ul className='list-unstyled footer-links'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/collection">Collection</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/account">Account</Link></li>
            </ul>
          </div>

          {/* CONNECT COLUMN - UPDATED */}
          <div className="col-lg-3 col-md-6 footer-col connect-col">
            <p className='fw-bold lead footer-heading'>CONNECT</p>
            
            {/* Social Icons */}
            <div className="social-icons mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="icon" />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="icon" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" />
              </a>
            </div>
            
            {/* Newsletter and Policies */}
            <div className="connect-content">
              <p className='mb-2 newsletter-title'>Join Our Newsletter</p>
              
              <form className='newsletter-form'>
                {/* Input for Email */}
                <input 
                  type="email" 
                  placeholder='Enter Your Email' 
                  className='form-control mb-2 footer-input' 
                  aria-label='Email address for newsletter'
                />
                
                {/* Submit Button (Styled as input for your screenshot look) */}
                <input 
                  type="submit" 
                  value='Subscribe' 
                  className='form-control footer-subscribe-btn' 
                />
              </form>
              
              {/* Policy Links */}
              <ul className='list-unstyled policy-links mt-3'>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service">Terms of Services</Link></li>
              </ul>
            </div>
          </div>
          
        </div>

       
        <hr className='footer-divider text-white mt-4 mb-3' />
        <div className="row">
          <div className="col-12 text-center footer-copyright">
            &copy; {new Date().getFullYear()} Aurora Jewels. All Rights Reserved.
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;