import React from 'react';
import useServices from '../../Hooks/useServices';
import AllService from '../AllService/AllService';

const AllServices = () => {
    const [services, setServices] = useServices();
    return (
        <div>
            <h2>{services.length}</h2>
            <div className='grid grid-cols-3 container mx-auto'>
                {
                    services.map(service => <AllService
                        key={service._id}
                        service={service}
                    ></AllService>)
                }
            </div>
        </div>
    );
};

export default AllServices;