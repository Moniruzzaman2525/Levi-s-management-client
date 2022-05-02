import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AllService = ({ service }) => {
    const { _id, name, img, price, description, suplier, quentity } = service;
    const handleUserDelate = id => {
        const proced = window.confirm("Are You Sure Want To Delate!!")
        if (proced) {
            const url = `http://localhost:5000/delete/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log("delate");
                })
        }
    }
    return (
        <div>
            <img className='' src={img} alt="" />
            <h1>{name}</h1>
            <p>{price}</p>
            <p><small>{description}</small></p>
            <p>{suplier}</p>
            <p>{quentity}</p>
            <button onClick={() => handleUserDelate(_id)}>Delate</button>
            <Link to={`/update/${_id}`}><button>Update</button></Link>
        </div>
    );
};

export default AllService;