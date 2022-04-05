import React from 'react';
import CustomerCard from '../CustomerCard/CustomerCard';
import useCustomer from '../hooks/useCustomer';

const Reviews = () => {
    const [customers] = useCustomer()
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 my-20'>
            {
                customers.map((customer, index) => <CustomerCard key={index} customer={customer}></CustomerCard>)
            }
        </div>
    );
};

export default Reviews;