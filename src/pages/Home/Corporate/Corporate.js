import React from 'react';

const Corporate = ({ corporate }) => {

    const { price, name, description, img } = corporate;
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 g-5 '>
            <div class="card text-center p-2" >
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    
                    <p class="card-text">{description}</p>
                    <h5 class="card-title">Price: ${price}</h5>
                    <button class="btn btn-primary">Book: {name}</button>
                </div>
            </div>
        </div>
    );
};

export default Corporate;