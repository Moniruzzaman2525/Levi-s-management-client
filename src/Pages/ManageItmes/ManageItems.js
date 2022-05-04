import React from 'react';
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
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg container mx-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Supplier Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map(service => {
                            return < tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    {service.name}
                                </th>
                                <td class="px-6 py-4">
                                    {service.quentity}
                                </td>
                                <td class="px-6 py-4">
                                    {service.suplier}
                                </td>
                                <td class="px-6 py-4">
                                    {service.price}
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <button onClick={() => handleUserDelate(service._id)}>Delate</button>
                                </td>
                            </tr>


                        })
                    }
                </tbody>
            </table>
        </div >
    );
};

export default ManageItems;