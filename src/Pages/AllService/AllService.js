import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useServices from '../../Hooks/useServices';

const AllService = ({ service, handleUserDelate }) => {
    // const { handleUserDelate } = useServices()
    const { _id, name, img, price, description, suplier, quentity } = service;

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