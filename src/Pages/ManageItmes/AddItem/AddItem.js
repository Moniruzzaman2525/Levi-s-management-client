import React from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddItem = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleAddItems = async e => {
        e.preventDefault();
        const items = {
            email: e.target.email.value,
            name: e.target.name.value,
            price: e.target.price.value,
            quantity: e.target.quantity.value,
            supplier: e.target.supplier.value,
            description: e.target.description.value,
            img: e.target.img.value
        }
        axios.post("https://hidden-crag-72651.herokuapp.com/add", items)
            .then(response => {
                console.log(response);
                e.target.reset();
            })
    }
    return (
        <div className='w-1/2 mx-auto'>
            <form onSubmit={handleAddItems} className='w'>
                <div className="mb-6">
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">User Name</label>
                    <input type="text" value={user?.displayName} readOnly disabled id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">User Email</label>
                    <input type="text" name='email' value={user?.email} readOnly disabled id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tittle</label>
                    <input type="text" name='name' id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
                    <input type="text" name='price' id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">quantity</label>
                    <input type="text" name='quantity' id="quantity" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="supplier-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Supplier Name</label>
                    <input type="text" name='supplier' id="supplier-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Items Description</label>
                    <textarea id="message" name='description' rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add Items Description..."></textarea>
                </div>
                <div className="mb-6">
                    <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image Link</label>
                    <input type="text" name='img' id="image" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                {/* <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                    </div>
                    <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                </div> */}
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
            </form>
        </div>
    );
};

export default AddItem;