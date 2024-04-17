// Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-10 font-mono">
      <div className="container mx-auto flex justify-evenly items-center py-4 px-8">
        <h1 className="text-2xl font-bold text-white">WebWorks</h1>
        <ul className="flex space-x-28">
          <li><a href="#" className="text-white hover:text-gray-900">Home</a></li>
          <li><a href="#" className="text-white hover:text-gray-900">Components</a></li>
          <li><a href="#" className="text-white hover:text-gray-900">Contact</a></li>
        </ul>
        <button className="bg-slate-100 text-black font-semibold py-3 px-[4rem] rounded-2xl">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
