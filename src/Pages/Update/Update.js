import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

        //
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
                // setUser(data)
                // e.target.reset()
            });
    };
    const handleDeliveryProduct = (id) => {
        // console.log('object');
        const quantity = user?.quentity;
        const updateQuantity = { quantity };
        const url = `http://localhost:5000/deliver/${id}`
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
                setIsReload(!isReload)
            })
    }

    return (
        <div>
            <img src={user.img} alt="" />
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
    );
};

export default Update;