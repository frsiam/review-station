import React from 'react';
import laptop from '../../images/laptop.jpg'
import CustomerCard from '../CustomerCard/CustomerCard';
import useCustomer from '../hooks/useCustomer';
import {useNavigate} from "react-router-dom"

const Home = () => {
    const [customers] = useCustomer()
    console.log(customers[0])
    const x = customers.slice(3)
    const navigate = useNavigate()
    return (
        <>
            <div className='p-3 border-4 mx-20 grid grid-cols-1 md:grid-cols-2'>
                <div className='border-2 grid justify-start pl-8 h-auto content-center py-5'>
                    <h1>left side: {customers.length}</h1>
                    <h1 className='text-4xl font-bold'><span className='text-pink-500'>Your Product</span> <br />Our Analysis</h1>
                </div>
                <div className='border-2 grid justify-end pr-8 h-auto content-center py-5'>
                    <h1>right side</h1>
                    <img src={laptop} alt="" />
                </div>
            </div>
            <div className='mx-20 grid justify-center mt-20'>
                <h1 className='text-5xl font-bold'>Customer Reviews({x.length})</h1>
            </div>
            <div className='mx-5 md:mx-20 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    x.map((customer, index) => <CustomerCard customer={customer} key={index}></CustomerCard>)
                }
            </div>
            <div className='mx-5 md:mx-20 grid justify-center mt-10 mb-32'>
                <button onClick={() => navigate('/reviews')} className='border-2 px-4 py-2 bg-blue-700 mx-20'>See All Reviews</button>
            </div>
        </>
    );
};

export default Home;