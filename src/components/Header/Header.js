import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-white shadow-md py-3'>
            <div className='flex gap-8 justify-center uppercase font-semibold'>
                <NavLink className={({isActive}) => isActive ? 'text-cyan-500 border-b-2 border-blue-600 pt-3 pb-1': 'text-orange-500 pt-3 pb-1 border-b-2 border-gray-300'} to="/">Home</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-cyan-500 border-b-2 border-blue-600 pt-3 pb-1': 'text-orange-500 pt-3 pb-1 border-b-2 border-gray-300'} to="/reviews">Reviews</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-cyan-500 border-b-2 border-blue-600 pt-3 pb-1': 'text-orange-500 pt-3 pb-1 border-b-2 border-gray-300'} to="/dashboard">Dashboard</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-cyan-500 border-b-2 border-blue-600 pt-3 pb-1': 'text-orange-500 pt-3 pb-1 border-b-2 border-gray-300'} to="/blogs">Blogs</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-cyan-500 border-b-2 border-blue-600 pt-3 pb-1': 'text-orange-500 pt-3 pb-1 border-b-2 border-gray-300'} to="/about">About</NavLink>
            </div>
        </div>
    );
};

export default Header;