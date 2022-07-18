import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const {serviceId} = useParams();
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 g-5 w-50 mx-auto'>
            <div className="card text-center p-2" >
                
                <div className="card-body">
                    <h2>Service Detail</h2>
                    <h5 className="card-title">{serviceId}</h5>
                    <button className='btn btn-primary'>Payment</button>

                </div>
            </div>
        </div>
    );
};


export default Checkout;