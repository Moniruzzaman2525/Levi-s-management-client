import React from 'react';
import Banner from '../Banner/Banner';
import DanimProduct from '../DanimProduct/DanimProduct';
import Mission from '../Mission/Mission';
import OurTeam from '../OurTeam/OurTeam';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Mission></Mission>
            <Services></Services>
            <DanimProduct></DanimProduct>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;