import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
const Update = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const [isReload, setIsReload] = useState(false);
    // console.log('user', user.quentity);
    useEffect(() => {
        fetch(`http://localhost:5000/service/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [isReload]);
    const handleUpdateQuentity = e => {
        e.preventDefault();

        const quentity = e.target.quantity.value;
        const newQuentity = parseInt(quentity) + parseInt(user?.quentity)
        const updateQuentity = { newQuentity }

        const url = `http://localhost:5000/service/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuentity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsReload(!isReload);
                e.target.reset();
                toast.success("Stock add Successful")
                e.target.reset()
            });
    };
    const handleDeliveryProduct = (id) => {
        const quantity = user?.quentity;
        const updateQuantity = { quantity };
        const url = `http://localhost:5000/delivery/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsReload(!isReload);
                toast.success('Delivery Successful')
            })
    }

    return (
        <div className='md:grid grid-cols-2 container mx-auto mt-10'>
            <div>
                <img src={user.img} alt="" />
            </div>
            <div>
                <p>Id: {user._id}</p>
                <h1>{user.name}</h1>
                <p>{user.price}</p>
                <p><small>{user.description}</small></p>
                <p>{user.suplier}</p>
                <p>quantity{user.quentity}</p>
                <button onClick={() => handleDeliveryProduct(user._id)}>Delivered</button>
                <form onSubmit={handleUpdateQuentity}>
                    <input type="text" name='quantity' />
                    <input className='cursor-pointer' type="submit" value="Add quantity" />
                </form>
            </div>
        </div>
    );
};

export default Update;