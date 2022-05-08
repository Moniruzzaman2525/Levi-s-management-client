import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../api/axiosPrivate';
import auth from '../../../firebase.init';
import Items from './Items/Items';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [addItems, setAddItems] = useState([]);
    // console.log(addItems);
    const navigate = useNavigate();
    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `https://hidden-crag-72651.herokuapp.com/add?email=${email}`
            try {
                const { data } = await axiosPrivate.get(url);
                setAddItems(data);
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/signin');
                    toast.error(error?.message)
                }
            }
        }
        getItems();
    }, [user]);



    const handleUserDelate = id => {
        console.log('object', id);
        const proceed = window.confirm("Are You Sure Want To Delate!!")
        if (proceed) {

            const url = `https://hidden-crag-72651.herokuapp.com/delete/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log('hello', data))
            const updateService = addItems.filter(service => service._id !== id);
            setAddItems(updateService);
            toast.success('Items Delate Successful')
        }
    }


    return (
        <div className='mt-10 '>
            <h1 className='text-2xl text-center'>My Items: {addItems.length}</h1>
            <h1 className='text-2xl text-center'>User Name: {user.displayName}</h1>
            <h1 className='text-2xl text-center'>User Email: {user.email}</h1>
            <div className='md:grid grid-cols-2 mt-10'>
                {
                    addItems.map(item => <Items
                        item={item}
                        key={item._id}
                        handleUserDelate={handleUserDelate}
                    ></Items>)
                }
            </div>
        </div>
    );
};

export default MyItems;