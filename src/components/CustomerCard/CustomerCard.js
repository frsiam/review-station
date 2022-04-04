import React from 'react';

const CustomerCard = ({customer}) => {
    const {name, rating, description, img} = customer
    return (
        <div>
            <h1>Name: {name}</h1>
            <img src={img} alt="" className='w-56 rounded-full'/>
        </div>
    );
};

export default CustomerCard;