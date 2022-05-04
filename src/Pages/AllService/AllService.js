import React from 'react';
import { Link } from 'react-router-dom';

const AllService = ({ service }) => {
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
            <Link to={`/update/${_id}`}><button>Update</button></Link>
        </div>
    );
};

export default AllService;