import React from 'react';
import Corporate from '../Corporate/Corporate';
import Corporates from '../Corporates/Corporates';
import Packages from '../Corporates/Corporates';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Corporates></Corporates>
        </div>
    );
};

export default Home;