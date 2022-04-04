import React from 'react';
import laptop from '../../images/laptop.jpg'

const Home = () => {
    return (
        <div className='p-3 border-4 mx-20 grid grid-cols-2'>
            <div className='border-2 grid justify-start pl-8 h-auto content-center py-5'>
                <h1>left side</h1>
                <h1 className='text-4xl font-bold'><span className='text-pink-500'>Your Product</span> <br />Our Analysis</h1>
            </div>
            <div className='border-2 grid justify-end pr-8 h-auto content-center py-5'>
                <h1>right side</h1>
                <img src={laptop} alt="" />
            </div>
        </div>
    );
};

export default Home;