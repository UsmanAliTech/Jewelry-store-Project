import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar2.css';
import Ring from './Ring';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ringdata from './Ringdata';
import { FiHome, FiMaximize, FiTarget, FiMail, FiWatch, FiUser } from 'react-icons/fi';
const ringCount = Ringdata ? Ringdata.length : 0;
const categoryLinks = [
  { name: 'Home', icon: <FiHome size={20} />, path: '/home' },
  { name: `Rings `, icon: <FiMaximize size={20} />, path: 'rings' },
  { name: 'Earrings', icon: <FiTarget size={20} />, path: '/earrings' },
  { name: 'Necklaces', icon: <FiMail size={20} />, path: '/necklaces' },
  { name: 'Watches', icon: <FiWatch size={20} />, path: '/watches' },
  { name: 'Account', icon: <FiUser size={20} />, path: '/account' },
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
