import React from 'react';
import notFound from '../../../images/not-found/404.jpg'

const NotFound = () => {
    return (
        <div className='container text-danger text-center mt-5 mb-5'>
            <h1>You are in wrong place</h1>
            <img className='mb-5 mt-5' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;