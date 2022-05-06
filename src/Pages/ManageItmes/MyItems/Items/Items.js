import React from 'react';

const Items = ({ item }) => {

    const { name, price, img } = item
    return (
        <div>
            <div>
                <img src={img} alt="" />
                <p>name: {name}</p>
                <p>price: {price}</p>
            </div>
        </div>
    );
};

export default Items;