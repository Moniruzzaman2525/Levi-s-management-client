import React from 'react';
import { Link } from 'react-router-dom';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const { services } = useServices();

    const newServices = services.slice(0, 6)

    return (
        <div className='w-full'>
            <h2 className='text-4xl flex justify-center m-8 items-center'>Inventory</h2>
            <div className='md:grid grid-cols-3 container mx-auto gap-y-8'>
                {
                    newServices.map(service => <Service
                        service={service}
                        key={service._id}
                    ></Service>)
                }
            </div>
            <Link to={'/services'}><button>Manage Inventory</button></Link>
        </div>
    );
};

export default Services;