import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToCheckout = id => {
        navigate(`/checkout/${id}`);
    }

    return (

        <div className='col-sm-12 col-md-6 col-lg-4 g-5 '>
            <div className="card text-center p-2" >
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>

                    <p className="card-text">{description}</p>
                    <h5 className="card-title">Price: ${price}</h5>
                    <button onClick={() => navigateToCheckout(id )} className="btn btn-primary">Checkout: {name}</button>
                </div>
            </div>
        </div>

    );
};

export default Service;