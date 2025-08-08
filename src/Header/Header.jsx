import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import coffeeIcon from "/coffee-icon-svgrepo-com.svg";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className='shadow sticky z-50 top-0 h-15'>
            <nav className='bg-white border-gray-200 p-2'>
                <div className='flex flex-wrap justify-between items-center mx-auto'>
                    <Link to="/" className='flex items-center'>
                        <img src={coffeeIcon} alt="coffee-icon" width={45} className='mr-3 h-10 ml-0 lg:ml-30'  />
                    </Link>

                    <button
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-controls="mobile-menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span className="sr-only">Toggle menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            {isMobileMenuOpen ? (
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            ) : (
                                <path fillRule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 6h14a1 1 0 010 2H3a1 1 0 010-2zm0 6h14a1 1 0 010 2H3a1 1 0 010-2z" clipRule="evenodd" />
                            )}
                        </svg>
                    </button>

                    <div className='hidden items-center lg:flex lg:order-2 space-x-4'>
                        <Link to="#" className='text-gray-800 hover:bg-gray-50 font-medium rounded-lg text-sm px-4 py-2 pl-8 pr-8'>LogIn</Link>
                        <Link to="#" className='text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2 pl-8 pr-8'>SignIn</Link>
                    </div>

                    <div className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'>
                        <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
                            <li>
                                <NavLink to="/" className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                                >Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="about" className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                                >About</NavLink>
                            </li>
                            <li>
                                <NavLink to="contact" className={({ isActive }) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                                >Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>

                    {isMobileMenuOpen && (
                        <div className='w-full lg:hidden mt-4 space-y-4' id="mobile-menu">
                            <ul className='flex flex-col font-medium space-y-2'>
                                <li>
                                    <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} hover:bg-gray-50`}
                                    >Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="about" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} hover:bg-gray-50`}
                                    >About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="contact" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} hover:bg-gray-50`}
                                    >Contact Us</NavLink>
                                </li>
                            </ul>

                            <div className="flex flex-col space-y-2 px-4">
                                <Link to="#" className='text-gray-800 hover:bg-gray-50 font-medium rounded-lg text-sm py-2 w-full text-center border border-gray-300'>LogIn</Link>
                                <Link to="#" className='text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm py-2 w-full text-center'>SignIn</Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}
