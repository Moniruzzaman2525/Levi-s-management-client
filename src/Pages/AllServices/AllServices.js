import React from 'react';
import useServices from '../../Hooks/useServices';
import AllService from '../AllService/AllService';

const AllServices = () => {
    const { services, setServices } = useServices();
    const handleUserDelate = id => {
        const proced = window.confirm("Are You Sure Want To Delate!!")
        if (proced) {

            const url = `http://localhost:5000/deleted/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data))
            const updateService = services.filter(service => service._id !== id);
            setServices(updateService)
            console.log(updateService);
            console.log(services);
        }
    }

    return (
        <div>
            <h2>{services.length}</h2>
            <div className='grid grid-cols-3 container mx-auto'>
                {
                    services.map(service => <AllService
                        key={service._id}
                        service={service}
                        handleUserDelate={handleUserDelate}
                    ></AllService>)
                }
            </div>
        </div>
    );
};

export default AllServices;