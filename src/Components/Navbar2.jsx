import React from 'react';
import { Link } from 'react-router-dom'; // <-- 1. Import Link from React Router
import './Navbar2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ring from './Ring';
// Import modern icons
import { FiHome, FiMaximize, FiTarget, FiMail, FiWatch, FiUser } from 'react-icons/fi';

// Define the links for the category bar using 'path' for routing
const categoryLinks = [
  { name: 'Home', icon: <FiHome size={20} />, path: '/home' }, // Use root path for Home
  { name: 'Rings', icon: <FiMaximize size={20} />, path: '/rings' }, // Set path for Rings
  { name: 'Earrings', icon: <FiTarget size={20} />, path: '/earrings' }, // Set path for Earrings
  { name: 'Necklaces', icon: <FiMail size={20} />, path: '/necklaces' }, // Set path for Necklaces
  { name: 'Watches', icon: <FiWatch size={20} />, path: '/watches' }, // Set path for Watches
  { name: 'Account', icon: <FiUser size={20} />, path: '/account' }, // Set path for Account
];



const NavItem = ({ path, icon, label }) => ( 
  <Link
    to={path} 
    className="nav-link-item d-flex flex-column flex-lg-row align-items-center text-decoration-none"
  >
    
    <span className="nav-icon-wrapper me-lg-2">{icon}</span>

    <span className="fw-medium text-nowrap mt-1 mt-lg-0">
      {label}
    </span>
  </Link>
);

const Navbar2 = () => {
  return (
    <>
      
      <nav className="navbar-container-desktop d-none d-lg-block">
        <div className="navbar-centered d-flex justify-content-center align-items-center h-100 space-x-lg-5">
          {categoryLinks.map((link) => (
            <NavItem key={link.name} path={link.path} icon={link.icon} label={link.name} />
          ))}
        </div>
      </nav>
      
     
      <nav className="navbar-container-mobile fixed-bottom d-lg-none">
        <div className="navbar-centered d-flex justify-content-around align-items-center h-100">
          {categoryLinks.map((link) => (
            <NavItem key={link.name} path={link.path} icon={link.icon} label={link.name} />
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar2;
