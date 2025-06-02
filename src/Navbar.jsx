import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-gray-200 flex gap-5 py-2 px-2 text-emerald-800 font-semibold justify-end'>
      <NavLink to="/" className={({ isActive }) => isActive ? 'text-amber-500' : ''}>Home</NavLink>
      <NavLink to="/blogs" className={({ isActive }) => isActive ? 'text-amber-500' : ''}>Blogs</NavLink>
      <NavLink to="/create" className={({ isActive }) => isActive ? 'text-amber-500' : ''}>Create a Blog!</NavLink>
    </div>
  );
};

export default Navbar;
