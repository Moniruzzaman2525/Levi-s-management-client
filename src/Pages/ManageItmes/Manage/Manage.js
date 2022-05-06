import React from 'react';
import { Link } from 'react-router-dom';

const Manage = ({ service, handleUserDelate }) => {
    // const { } = service;
    return (
        < tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {service.name}
            </th>
            <td className="px-6 py-4">
                {service.quantity}
            </td>
            <td className="px-6 py-4">
                {service.price}
            </td>
            <td className="px-6 py-4">
                {service.supplier}
            </td>
            <td className="px-6 py-4 text-right">
                <Link to={`/update/${service._id}`}><button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green</button></Link>
                <button className='m-4 p-1 mr-6 p-2 bg-lime-700 rounded-lg text-white' onClick={() => handleUserDelate(service._id)}>Delate</button>
            </td>
        </tr>
    );
};

export default Manage;