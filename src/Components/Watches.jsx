import React from "react";
import Itemcard from "./Itemcard";
import Watchesdata from "./Watchesdata";
import "./Ring.css";
import Footer from "./Footer";
import Scrooltop from "./Scrooltop";

const Rings = () => {
  return (
    <>
    <div className="container py-5 mt-5">
      <div className="row">
        {Watchesdata.map((item, index) => (
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
