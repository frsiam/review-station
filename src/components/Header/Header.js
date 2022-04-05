import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-black shadow-lg shadow-orange-200 py-5 mb-10 flex justify-around content-center'>
            <div>
                <Link to='/' className='text-3xl font-bold text-cyan-400 uppercase'>Review Station</Link>
            </div>
            <div className='flex gap-8 justify-center uppercase font-semibold'>
                <NavLink className={({isActive}) => isActive ? 'text-cyan-400 border-b-2 border-white pt-3 pb-1': 'text-orange-400 pt-3 pb-1 border-b-2 border-orange-500'} to="/">Home</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-cyan-400 border-b-2 border-white pt-3 pb-1': 'text-orange-400 pt-3 pb-1 border-b-2 border-orange-500'} to="/reviews">Reviews</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-cyan-400 border-b-2 border-white pt-3 pb-1': 'text-orange-400 pt-3 pb-1 border-b-2 border-orange-500'} to="/dashboard">Dashboard</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-cyan-400 border-b-2 border-white pt-3 pb-1': 'text-orange-400 pt-3 pb-1 border-b-2 border-orange-500'} to="/blogs">Blogs</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-cyan-400 border-b-2 border-white pt-3 pb-1': 'text-orange-400 pt-3 pb-1 border-b-2 border-orange-500'} to="/about">About</NavLink>
            </div>
        </div>
    );
};

export default Header;