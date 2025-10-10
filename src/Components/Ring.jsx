import React from 'react'

import Ringdata from './Ringdata'
import Itemcard from './Itemcard'
// Removing Collection import, as it is not strictly necessary here and was not in the original working version.
// import Collection from './Collection'; 

const Ring = () => {

    if (!Ringdata || Ringdata.length === 0) {

        return (
            <div className="container mt-5 pt-5 text-center">
                <h2 className="text-dark">Rings Collection</h2>
                <p className="lead text-muted">No ring products are currently available.</p>
            </div>
        );
    }
    return (
        <div className="container mt-5 pt-5">
            {/* Removed <Collection /> as it was imported but not clearly part of the Ring component's core function */}
            <h2 className="h1 mt-5 text-dark">Rings Collection ({Ringdata.length} Items)</h2>
            <div className="row">
                {Ringdata.map(item => (
                    <Itemcard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Ring
