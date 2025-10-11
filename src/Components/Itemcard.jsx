import React from 'react'
import './Itemcard.css'
function Itemcard({ item }) {
    const { id, name, description, price, image } = item;

    return (
        <div className='col-lg-4 col-md-6 col-sm-12 mb-4' key={id}>
            <div className='card h-100 shadow-sm border-0 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg'>
                <img
                    src={image}
                    className='card-img-top w-full'
                    alt={name}
                    style={{ height: '300px', objectFit: 'cover' }}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/300x300/f8f9fa/343a40?text=Image+Not+Found";
                    }}
                />
                <div className="card-body d-flex flex-column p-4">
                    <div className="card-title fw-bold text-truncate mb-2 text-dark ">{name}</div>

                    <p className='card-text text-muted mb-3' style={{ fontSize: '0.9rem' }}>{description.substring(0, 60)}...</p>
                    <div className="mt-auto d-flex justify-content-between align-items-center pt-2 border-top">
                        <span className="text-primary fs-5 fw-bolder">{price}</span>
                        <button className="btn btn-dark btn-sm rounded-pill px-4 shadow-md transition-all duration-200 hover:bg-primary">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Itemcard
