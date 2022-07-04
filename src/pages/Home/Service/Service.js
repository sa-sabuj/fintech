import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className="container">
            <div className='service'>
                <img className='w-100' src={img} alt="" />
                <h2>{name}</h2>
                <p>{description}</p>
                <p>Price: <small>${price}</small></p>
                <button className='btn btn-primary'>Book: {name}</button>
            </div>
        </div>
    );
};

export default Service;