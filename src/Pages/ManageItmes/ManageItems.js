import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useServices from '../../Hooks/useServices';
import Manage from './Manage/Manage';


const ManageItems = () => {
    const { services, setServices } = useServices();
    const handleUserDelate = id => {
        console.log('object', id);
        const proceed = window.confirm("Are You Sure Want To Delate!!")
        if (proceed) {

            const url = `https://sleepy-citadel-83036.herokuapp.com//delete/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log('hello', data))
            const updateService = services.filter(service => service._id !== id);
            setServices(updateService);
            toast.success('Items Delate Successful')
            // console.log(updateService);
            // console.log(services);
        }
    }
    return (
        <div className='container mx-auto w-full'>
            <Link to={'/add'}><button className="inline-flex bottom-1 text-center text-white font-bold rounded-lg text-2xl px-5 my-10 py-2 ml-2" style={{ backgroundColor: '#64B9B4' }}>
                Add New Item
                <svg className="ml-2 mt-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button></Link>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg container mx-auto">
                <table className="w-full table-aa text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 text-lg py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 text-lg py-3">
                                In-Stock
                            </th>
                            <th scope="col" className="px-6 text-lg py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 text-lg py-3">
                                Supplier Name
                            </th>
                            <th scope="col" className="px-6 text-lg py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            services.map(service => <Manage
                                key={service._id}
                                service={service}
                                handleUserDelate={handleUserDelate}
                            ></Manage>)
                        }
                    </tbody>
                </table>
            </div >
        </div>
    );
};

export default ManageItems;