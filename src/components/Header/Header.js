import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-black shadow-lg shadow-orange-200 py-5 mb-10 flex justify-around content-center'>
            <div className='hidden md:block'>
                <Link to='/' className='text-3xl font-bold text-cyan-400 uppercase'>Review Station</Link>
            </div>
            <div className='md:flex grid grid-cols-3 md:flex-row gap-2 md:gap-8 justify-center uppercase font-semibold'>
                <NavLink className={({isActive}) => isActive ? 'text-cyan-400 md:border-b-2 border-white pt-3 pb-1': 'text-orange-400 pt-3 pb-1 md:border-b-2 border-orange-500'} to="/">Home</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-cyan-400 md:border-b-2 border-white pt-3 pb-1': 'text-orange-400 pt-3 pb-1 md:border-b-2 border-orange-500'} to="/reviews">Reviews</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-cyan-400 md:border-b-2 border-white pt-3 pb-1': 'text-orange-400 pt-3 pb-1 md:border-b-2 border-orange-500'} to="/dashboard">Dashboard</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-cyan-400 md:border-b-2 border-white pt-3 pb-1': 'text-orange-400 pt-3 pb-1 md:border-b-2 border-orange-500'} to="/blogs">Blogs</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-cyan-400 md:border-b-2 border-white pt-3 pb-1': 'text-orange-400 pt-3 pb-1 md:border-b-2 border-orange-500'} to="/about">About</NavLink>
            </div>
        </div>
    );
};

export default Header;