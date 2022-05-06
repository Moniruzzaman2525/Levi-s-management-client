import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
const Update = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const [isReload, setIsReload] = useState(false);
    useEffect(() => {
        fetch(`https://hidden-crag-72651.herokuapp.com/service/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [isReload]);
    const handleUpdateQuantity = e => {
        e.preventDefault();

        const quantity = e.target.quantity.value;
        const newQuantity = parseInt(quantity) + parseInt(user?.quantity)
        const updateQuantity = { newQuantity: newQuantity }

        const url = `https://hidden-crag-72651.herokuapp.com/service/${id}`
        if (!quantity) {
            alert('Please add some quantity')
        } else {
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
                    e.target.reset();
                    toast.success("Stock add Successful")
                    e.target.reset()
                });
        }
    };
    const handleDeliveryProduct = (id) => {
        const quantity = user?.quantity;
        const updateQuantity = { quantity };
        const url = `https://hidden-crag-72651.herokuapp.com/delivery/${id}`
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
                <img className='w-2/3' src={user.img} alt="" />
            </div>
            <div>
                <p>Id: {user._id}</p>
                <h1>{user.name}</h1>
                <p>{user.price}</p>
                <p><small>{user.description}</small></p>
                <p>{user.supplier}</p>
                <p>quantity{user.quantity}</p>
                <button onClick={() => handleDeliveryProduct(user._id)}>Delivered</button>
                <form onSubmit={handleUpdateQuantity}>
                    <input type="text" name='quantity' />
                    <input className='cursor-pointer' type="submit" value="Add quantity" />
                </form>
            </div>
        </div>
    );
};

export default Update;