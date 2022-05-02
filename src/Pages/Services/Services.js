import React from 'react';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useServices();

    const newServices = services.slice(0, 6)

    return (
        <div>
            <h2>services{services.length}</h2>
            <div className='grid grid-cols-3 container mx-auto'>
                {
                    newServices.map(service => <Service
                        service={service}
                        key={service._id}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;