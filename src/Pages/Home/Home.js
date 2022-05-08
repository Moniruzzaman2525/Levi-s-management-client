import React from 'react';
import useServices from '../../Hooks/useServices';
import Loading from '../../SharePage/Loading/Loading';
import AllBrand from '../AllBrand/AllBrand';
import Banner from '../Banner/Banner';
import ExtraPart from '../ExtraPart/ExtraPart';
import Mission from '../Mission/Mission';
import OurTeam from '../OurTeam/OurTeam';
import Services from '../Services/Services';

const Home = () => {
    const { services } = useServices();
    return (
        <div>
            {
                services.length === 0 ?
                    <Loading></Loading> :
                    <>
                        <Banner></Banner>
                        <Mission></Mission>
                        <Services></Services>
                        <AllBrand></AllBrand>
                        <OurTeam></OurTeam>
                        <ExtraPart></ExtraPart>
                    </>

            }
        </div>
    );
};

export default Home;