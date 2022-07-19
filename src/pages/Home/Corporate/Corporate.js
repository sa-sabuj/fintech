import React from 'react';

const Corporate = ({ corporate }) => {

    const { price, name, description, img } = corporate;
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 g-5 '>
            <div className="card text-center p-2" >
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    
                    <p className="card-text">{description}</p>
                    <h5 className="card-title">Price: ${price}</h5>
                    {/* <button className="btn btn-primary">Book: {name}</button> */}
                </div>
            </div>
        </div>
    );
};

export default Corporate;