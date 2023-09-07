import React from 'react'
import IP_blue from '../assests/IP_blue.png'
import { AiFillHome, AiFillContacts, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { FaPeopleGroup } from "react-icons/fa6";
import { NavLink, useNavigate } from 'react-router-dom';

const Navigation = () => {
    const navigate = useNavigate();
    const isUserLoggedIn = localStorage.getItem('isLogin') === 'true';

  const handleLogout = () => {
    // Clear the login status in localStorage
    localStorage.setItem('isLogin', 'false');
    // Optionally, you can redirect the user to the login page here.
    navigate('/Login');
    // window.location.href = '/Login';
  };
    return (
        <div>
            <nav className='flex bg-blue-700  text-right p-3 font-bold font-xl font-serif space-x-3 justify-between items-center text-white from-stone-200'>
                <div className="flex items-center">
                    <img src={IP_blue} className='h-10  w-24 mr-2 bg-no-repeat brightness-200 shadow' />

                </div>
                <div className='justify-between items-start w-96'> <h3>DoP Parcel Packing Products</h3></div>
                <div className="relative flex w-full flex-wrap items-stretch mb-1">
                    <input type="text" placeholder="Search any product" className="px-1 py-1
                 placeholder-slate-300 text-slate-600 relative bg-white rounded text-base border border-slate-300 outline-none focus:outline-none focus:ring w-8/12 pr-1" />
                    <div className='mt-1'><AiOutlineSearch size={24} /></div>


                </div>
                <div>
                    {isUserLoggedIn ? (
                        <button onClick={handleLogout} className='border p-2'>
                            Logout
                        </button>
                    ) : (
                        <NavLink to='/Login'>
                            <button className='border p-2'>Login</button>
                        </NavLink>
                    )}
                </div>
                <div className='flex space-x-3'>

                    <NavLink to="/"><span className='mt-1'><AiFillHome /></span><h1>Home</h1></NavLink>
                    <NavLink to="/About"><span className='mt-1'><FaPeopleGroup /></span><h1>About</h1></NavLink>
                    <NavLink to="/Contact"><span className='mt-1'><AiFillContacts /></span><h1>Contacts</h1></NavLink>
                    <NavLink to="/"><span className='mt-1'><AiOutlineShoppingCart /></span><h1>Cart</h1></NavLink>
                </div>
            </nav>


        </div>
    )
}

export default Navigation
