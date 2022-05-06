import React from 'react';
import { Link } from 'react-router-dom';
import useServices from '../../Hooks/useServices';


const ManageItems = () => {
    const { services, setServices } = useServices();
    const handleUserDelate = id => {
        console.log('object', id);
        const proced = window.confirm("Are You Sure Want To Delate!!")
        if (proced) {

            const url = `http://localhost:5000/delete/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log('hello', data))
            const updateService = services.filter(service => service._id !== id);
            setServices(updateService)
            console.log(updateService);
            console.log(services);
        }
    }
    return (
        <div className=''>
            <div className='md:w-full'>
                <button className='text-xl bg-green-500 flex justify-center m-8 items-center'>Add New Item</button>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg container mx-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Supplier Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                services.map(service => {
                                    return < tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            {service.name}
                                        </th>
                                        {/* <td className="px-6 py-4">
                                            {service.quentity}
                                        </td> */}
                                        <td className="px-6 py-4">
                                            {service.quentity}
                                        </td>
                                        <td className="px-6 py-4">
                                            {service.price}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <Link to={`/update/${service._id}`}><button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green</button></Link>
                                            <button className='md:m-4 p-1 mr-6 md:p-2 bg-lime-700 text-white' onClick={() => handleUserDelate(service._id)}>Delate</button>
                                        </td>
                                    </tr>


                                })
                            }
                        </tbody>
                    </table>
                </div >
            </div>
        </div>
    );
};

export default ManageItems;