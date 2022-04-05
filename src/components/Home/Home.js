import React from 'react';
import laptop from '../../images/laptop.jpg'
import CustomerCard from '../CustomerCard/CustomerCard';
import useCustomer from '../hooks/useCustomer';
import { useNavigate } from "react-router-dom"

const Home = () => {
    const [customers] = useCustomer()
    console.log(customers[0])
    const x = customers.slice(3)
    const navigate = useNavigate()
    return (
        <>
            <div className='mx-5 md:mx-20 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div className='pl-8 flex flex-col justify-center'>
                    <h1 className='text-5xl font-bold'><span className='text-pink-500'>Your Product</span> <br />Our Analysis</h1>
                    <p className='my-5'>We compare all of Apple's MacBook laptops to help you pick the right one.The best laptop is out there, and our laptop reviews dig deep into what's new from the world's biggest manufacturers to help you find it.</p>
                    <button className='hover:bg-black hover:text-white border border-black px-8 py-4 rounded-md bg-sky-200 text-blue-600 font-semibold w-40'><span className='hover:border border-violet-500 p-1 rounded-md'>Live Demo</span></button>
                </div>
                <div className='pl-8 flex content-center md:h-3/4'>
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
            <div className='grid justify-center mt-10 mb-8'>
                <button onClick={() => navigate('/reviews')} className='text-white font-semibold text-xl px-6 py-3 bg-blue-700 hover:bg-black mx-20'>See All Reviews</button>
            </div>
        </>
    );
};

export default Home;