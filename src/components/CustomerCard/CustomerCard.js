import React from 'react';

const CustomerCard = ({ customer }) => {
    const { name, rating, description, img } = customer
    return (
        <div className='shadow-lg m-5 shadow-gray-500 rounded-xl p-5 grid justify-center'>
            <div className='grid justify-center'>
                <img src={img} alt="" className='w-56 rounded-3xl' />
            </div>
            <p className='mt-4 mb-2'>{description}</p>
            <h1 className='font-semibold my-2'><span className='text-indigo-600'>By:</span> {name}</h1>
            <p className='font-semibold my-2'><span className='text-orange-500'>Ratings :</span> {rating}</p>
        </div>
    );
};

export default CustomerCard;