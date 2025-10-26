import React from "react";
import "./Itemcard.css";
import { Navbar } from "react-bootstrap";

function Itemcard({ item }) {
  return (
    
    
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="item-card">
        <img src={item.image} alt={item.name} className="item-image" />
        <div className="item-content">
          <h5 className="item-name">{item.name}</h5>
          <p className="item-description">{item.description}</p>
          <p className="item-price card-text text-success fw-bold fs-5 mb-3">{item.price}</p>
          <button className="view-btn btn btn-outline-dark mt-auto">VIEW DETAILS</button>
        </div>
      </div>
    </div>
    
  );
}

export default Itemcard;
