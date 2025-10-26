import React from "react";
import Itemcard from "./Itemcard";
import "./Ring.css";
import Footer from "./Footer";
import Scrooltop from "./Scrooltop";
import Necklacedata from "./Necklacedata";

const Rings = () => {
  return (
    <>
    <div className="container py-5 mt-5">
      <div className="row">
        {Necklacedata.map((item, index) => (
          <Itemcard key={index} item={item} />
        ))}
      </div>
    </div>
      <Scrooltop/>
      <Footer/>
    </>
  );
};

export default Rings;
