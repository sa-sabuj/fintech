import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        // <div className="container">
        //     <div className='service'>
        //         <img className='w-100' src={img} alt="" />
        //         <h2>{name}</h2>
        //         <p>{description}</p>
        //         <p>Price: <small>${price}</small></p>
        //         <button className='btn btn-primary'>Book: {name}</button>
        //     </div>
        // </div>
        
        
        


        <div className='col-sm-12 col-md-6 col-lg-4 g-5 '>
        <div className="card text-center p-2" >
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                
                <p className="card-text">{description}</p>
                <h5 className="card-title">Price: ${price}</h5>
                <button className="btn btn-primary">Book: {name}</button>
            </div>
        </div>
    </div>
        
    );
};

export default Service;