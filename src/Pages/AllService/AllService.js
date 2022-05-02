import React from 'react';

const AllService = ({ service }) => {
    const { name, img, price, description, suplier, quentity } = service;
    return (
        <div>
            <img className='' src={img} alt="" />
            <h1>{name}</h1>
            <p>{price}</p>
            <p><small>{description}</small></p>
            <p>{suplier}</p>
            <p>{quentity}</p>
        </div>
    );
};

export default AllService;