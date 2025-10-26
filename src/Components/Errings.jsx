import React from "react";
import Itemcard from "./Itemcard";
import Erringsdata from './Erringsdata'
import Footer from "./Footer";
import Scrooltop from "./Scrooltop";

const Errings = () => {
  return (
    <>
    <div className="container py-5 mt-5">
      <div className="row">
        {Erringsdata.map((item, index) => (
          <Itemcard key={index} item={item} />
        ))}
      </div>
    </div>
      <Scrooltop/>
      <Footer/>
    </>
  );
};

export default Errings;
