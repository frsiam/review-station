import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-black shadow-lg shadow-gray-400 py-3 mb-10'>
            <div className='flex gap-8 justify-center uppercase font-semibold'>
                <NavLink className={({isActive}) => isActive ? 'text-orange-500 border-b-2 border-white pt-3 pb-1': 'text-white pt-3 pb-1 border-b-2 border-orange-500'} to="/">Home</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-orange-500 border-b-2 border-white pt-3 pb-1': 'text-white pt-3 pb-1 border-b-2 border-orange-500'} to="/reviews">Reviews</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-orange-500 border-b-2 border-white pt-3 pb-1': 'text-white pt-3 pb-1 border-b-2 border-orange-500'} to="/dashboard">Dashboard</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-orange-500 border-b-2 border-white pt-3 pb-1': 'text-white pt-3 pb-1 border-b-2 border-orange-500'} to="/blogs">Blogs</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-orange-500 border-b-2 border-white pt-3 pb-1': 'text-white pt-3 pb-1 border-b-2 border-orange-500'} to="/about">About</NavLink>
            </div>
        </div>
    );
};

export default Header;