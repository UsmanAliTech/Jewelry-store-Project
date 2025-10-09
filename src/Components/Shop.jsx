import React from 'react';
import Footer from './Footer';
import { Navbar } from 'react-bootstrap';
import './Shop.css'; 
import Scrooltop from './Scrooltop';

const Shop = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-danger">No products available at the moment.</h2>
      </div>
    );
  }

  return (
    <>
      <div className="mb-5"><Navbar /></div>

      <div className="container py-4">
        <h1 className="mb-5 text-center mt-5">Our Collection</h1>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">
          {products.map(product => (
            <div className="col" key={product.id}>
              <div className="card h-100 shadow-sm border-0">
                {/* Bootstrap ratio keeps a consistent image area (no CSS required) */}
                <div className="ratio ratio-4x3">
                  <img
                    src={product.image || 'https://via.placeholder.com/400x300'}
                    alt={product.name}
                    className="card-img-top rounded-3"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                <div className="card-body d-flex flex-column text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-muted small flex-grow-1">{product.description}</p>
                  <p className="card-text text-success fw-bold fs-5 mb-3">Price: {product.price}</p>
                  <button className="btn btn-outline-dark mt-auto">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  <Scrooltop />
      <Footer />
    </>
  );
};

export default Shop;
