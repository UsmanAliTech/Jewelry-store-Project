import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar2.css';
import Ringdata from './Ringdata';
import Watchesdata from './Watchesdata';
import { FiHome, FiMaximize, FiTarget, FiMail, FiWatch, FiUser } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css';
import Necklacedata from './Necklacedata';
import Erringsdata from './Erringsdata';

const Navbar2 = () => {
  
  const NecklacesCount=Necklacedata? Necklacedata.length:0;
  const watchCount=Watchesdata? Watchesdata.length:0;
  const ErringsCount=Erringsdata? Erringsdata.length:0;
  const ringCount = Ringdata ? Ringdata.length : 0;
  

  return (
    <>
      
      <nav className="navbar-container-desktop d-none d-lg-block">
        <div className="navbar-centered d-flex justify-content-center align-items-center h-100 space-x-lg-5">
          
          <Link
            to="/home"
            className="nav-link-item d-flex flex-column flex-lg-row align-items-center text-decoration-none"
          >
            <span className="nav-icon-wrapper me-lg-2"><FiHome size={20} /></span>
            <span className="fw-medium text-nowrap mt-1 mt-lg-0">Home</span>
          </Link>

          <Link
            to="/rings"
            className="nav-link-item d-flex flex-column flex-lg-row align-items-center text-decoration-none"
          >
            <span className="nav-icon-wrapper me-lg-2"><FiMaximize size={20} /></span>
            <span className="fw-medium text-nowrap mt-1 mt-lg-0">Rings </span>
          </Link>

          <Link
            to="/earrings"
            className="nav-link-item d-flex flex-column flex-lg-row align-items-center text-decoration-none"
          >
            <span className="nav-icon-wrapper me-lg-2"><FiTarget size={20} /></span>
            <span className="fw-medium text-nowrap mt-1 mt-lg-0">Earrings</span>
          </Link>

          <Link
            to="/necklaces"
            className="nav-link-item d-flex flex-column flex-lg-row align-items-center text-decoration-none"
          >
            <span className="nav-icon-wrapper me-lg-2"><FiMail size={20} /></span>
            <span className="fw-medium text-nowrap mt-1 mt-lg-0">Necklaces</span>
          </Link>

          <Link
            to="/watches"
            className="nav-link-item d-flex flex-column flex-lg-row align-items-center text-decoration-none"
          >
            <span className="nav-icon-wrapper me-lg-2"><FiWatch size={20} /></span>
            <span className="fw-medium text-nowrap mt-1 mt-lg-0">Watches   </span>
          </Link>

          <Link
            to="/account"
            className="nav-link-item d-flex flex-column flex-lg-row align-items-center text-decoration-none"
          >
            <span className="nav-icon-wrapper me-lg-2"><FiUser size={20} /></span>
            <span className="fw-medium text-nowrap mt-1 mt-lg-0">Account</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="navbar-container-mobile fixed-bottom d-lg-none">
        <div className="navbar-centered d-flex justify-content-around align-items-center h-100">

          <Link to="/home" className="nav-link-item text-decoration-none d-flex flex-column align-items-center">
            <FiHome size={20} />
            <span className="fw-medium text-nowrap mt-1">Home</span>
          </Link>

          <Link to="/rings" className="nav-link-item text-decoration-none d-flex flex-column align-items-center">
            <FiMaximize size={20} />
            <span className="fw-medium text-nowrap mt-1">Rings</span>
          </Link>

          <Link to="/earrings" className="nav-link-item text-decoration-none d-flex flex-column align-items-center">
            <FiTarget size={20} />
            <span className="fw-medium text-nowrap mt-1">Earrings</span>
          </Link>

          <Link to="/necklaces" className="nav-link-item text-decoration-none d-flex flex-column align-items-center">
            <FiMail size={20} />
            <span className="fw-medium text-nowrap mt-1">Necklaces</span>
          </Link>

          <Link to="/watches" className="nav-link-item text-decoration-none d-flex flex-column align-items-center">
            <FiWatch size={20} />
            <span className="fw-medium text-nowrap mt-1">Watches</span>
          </Link>

          <Link to="/account" className="nav-link-item text-decoration-none d-flex flex-column align-items-center">
            <FiUser size={20} />
            <span className="fw-medium text-nowrap mt-1">Account</span>
          </Link>

        </div>
      </nav>
    </>
  );
};

export default Navbar2;
