// src/Sidebar.js
import React from 'react';
import './Sidebar.css'
// Define the categories for the links
const categories = ['Rings', 'Necklaces', 'Watches', 'Bracelets', 'Earrings'];
const sidebarId = "productSidebar"; // Unique ID for Bootstrap targeting

const Sidebar = ({ onCategorySelect, currentCategory }) => {
  return (
    <>
      {/* 1. Toggle Button (Visible on Small Screens) 
        - d-lg-none hides the button on large screens (where the sidebar is fixed).
        - data-bs-toggle/target links it to the Offcanvas element.
      */}
      <div className="container-fluid bg-light shadow-sm py-2 d-lg-none">
        <button 
          className="btn btn-dark w-100" 
          type="button" 
          data-bs-toggle="offcanvas" 
          data-bs-target={`#${sidebarId}`} 
          aria-controls={sidebarId}
        >
          <i className="bi bi-filter"></i> Filter Categories
        </button>
      </div>

      {/* 2. The Bootstrap Offcanvas Component (The Sidebar itself)
        - offcanvas-start: Appears from the left.
        - offcanvas-lg: Makes the offcanvas content visible by default on 'lg' screens and above.
        - border-end: Adds a vertical line separator.
      */}
      <div 
        className="offcanvas offcanvas-start border-end offcanvas-lg bg-light" 
        tabIndex="-1" 
        id={sidebarId} 
        aria-labelledby="sidebarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarLabel">Product Filters</h5>
          {/* Close button is hidden on large screens (d-lg-none) as the sidebar is always visible */}
          <button 
            type="button" 
            className="btn-close d-lg-none" 
            data-bs-dismiss="offcanvas" 
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body p-0">
          <div className="list-group list-group-flush">
            {categories.map((category) => (
              <a 
                key={category} 
                href="#" 
                className={`list-group-item list-group-item-action ${currentCategory === category ? 'active' : ''}`}
                // In React, we handle click events directly
                onClick={(e) => {
                  e.preventDefault(); // Prevent page reload
                  onCategorySelect(category);
                  
                  // Manually trigger Offcanvas hide on smaller screens after click
                  if (window.innerWidth < 992) { // 992px is the 'lg' breakpoint
                    const offcanvasEl = document.getElementById(sidebarId);
                    if (offcanvasEl) {
                      const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasEl);
                      if (bsOffcanvas) {
                        bsOffcanvas.hide();
                      }
                    }
                  }
                }}
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;