import React from 'react';
import { Link } from 'react-router-dom';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const { services } = useServices();

    const newServices = services.slice(0, 6)

    return (
        <div>
            <h2>services{services.length}</h2>
            <Link to={'/services'}><button>Manage Inventory</button></Link>
            <div className='grid grid-cols-3 '>
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