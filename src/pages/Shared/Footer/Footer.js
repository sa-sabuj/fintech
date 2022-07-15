import React from 'react';

import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='container'>
            
            <h2 className='text-center p-5'>Coppyright @ {year}</h2>
        </footer>
    );
};

export default Footer;