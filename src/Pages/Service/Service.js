import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // console.log(service.quentity);
    const { _id, name, img, price, description, suplier, quentity } = service;
    // const navigate = useNavigate();

    // const navigateToServiceDetail = id => {
    //     navigate(`/service/${id}`);
    // }

    return (
        <div>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>{price}</p>
            <p><small>{description}</small></p>
            <p>{suplier}</p>
            <p>quentity{quentity}</p>

            <Link className='bg-gray-400 p-1' to={`/update/${_id}`}><button>Update</button></Link>
            {/* <button onClick={() => navigateToServiceDetail(_id)} className='bg-gray-400 p-6'>Update</button> */}
        </div>
    );
};

export default Service;