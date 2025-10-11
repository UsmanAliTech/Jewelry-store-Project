import React from 'react'

import Ringdata from './Ringdata'
import Itemcard from './Itemcard'


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
