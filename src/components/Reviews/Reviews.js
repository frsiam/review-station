import React from 'react';
import CustomerCard from '../CustomerCard/CustomerCard';
import useCustomer from '../hooks/useCustomer';

const Reviews = () => {
    const [customers] = useCustomer()
    return (
        <div>
            {
                customers.map((customer, index) => <CustomerCard key={index} customer={customer}></CustomerCard>)
            }
        </div>
    );
};

export default Reviews;