import React from 'react';

const Items = ({ item, handleUserDelate }) => {
    const { _id, name, price, img, quantity, description } = item;

    return (
        <div className="max-w-sm mx-auto mb-10 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className=" w-2/3 mx-auto" src={img} alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <p style={{ color: '#494949' }} className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400"><span className='font-bold'></span> {description}</p>
                <p style={{ color: '#494949' }} className="mb-3 text-lg font-bold text-gray-700 dark:text-gray-400">Price: ${price}</p>
                <p style={{ color: '#494949' }} className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400"><span className='font-bold'>In-Stock:</span> {quantity}</p>
            </div>
            <button className="font-bold text-white rounded-lg text-sm mb-5 mr-3 px-5 py-2.5" style={{ backgroundColor: '#64B9B4' }} onClick={() => handleUserDelate(_id)}>Delete</button>
        </div>
    );
};

export default Items;