import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from "@headlessui/react";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import CustomLink from '../../CustomLink/CustomLink';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';

const Headers = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        toast.success('Sign Out Successfully')
    };
    if (error) {
        toast.error('Something Wrong!')
    }
    if (loading) {
        <Loading></Loading>
    }
    return (
        <div>
            <nav className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex md:flex-col md:jus justify-between">
                        <div className="flex items-center h-16 justify-between">
                            <div className="flex-shrink-0">
                                <Link to={'/'}>
                                    <img
                                        className="h-8 w-20"
                                        src="https://i.ibb.co/6D8JN7R/Levis-logo-quer-svg.png"
                                        alt="Workflow"
                                    /></Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-5 flex items-baseline ">
                                    <CustomLink to={'/'}><button className='header-style px-3 text-sm font-bold' type="button">HOME</button></CustomLink>

                                    {
                                        user && <CustomLink to={'/manage'}><button className='header-style px-3  text-sm font-bold' type="button">MANAGE ITEMS</button></CustomLink>

                                    }
                                    {
                                        user && <CustomLink to={'/add'}><button className='header-style px-3 rounded  text-sm font-bold' type="button">ADD ITEMS</button></CustomLink>

                                    }
                                    {
                                        user && <CustomLink to={'/myitems'}><button className='header-style px-3 rounded  text-sm font-bold' type="button">MY ITEMS</button></CustomLink>

                                    }
                                    <CustomLink to={'/blogs'}><button className='header-style px-3 text-sm font-bold' type="button">BLOGS</button></CustomLink>
                                    <CustomLink to={'/contact'}><button className='header-style px-3 text-sm font-bold' type="button">CONTACT</button></CustomLink>
                                    {
                                        user ? <h4 style={{ color: '#64B9B4' }} className='text-white px-3 rounded text-sm font-bold ml-5'>{user.displayName}</h4> : ""
                                    }

                                    {
                                        user ? <button className='header-style px-3 rounded text-sm  font-bold' onClick={logout}>SIGN OUT</button> :
                                            <CustomLink
                                                to="/signin"
                                                className="font-bold header-style  text-sm"
                                            >
                                                SIGN IN
                                            </CustomLink>
                                    }
                                </div>
                            </div>
                            {/* <div className='hidden md:block'>
                                <a className="text-white" href="">hello</a>
                                <a className="text-white" href="">hello</a>
                                <a className="text-white" href="">hello</a>
                            </div> */}
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            {
                                user ? <button style={{ color: '#64B9B4' }} className='mr-5 hover:text-white px-3 rounded-md text-sm font-bold' onClick={logout}>SIGN OUT</button> :
                                    <CustomLink
                                        to="/signin"
                                        style={{ color: '#64B9B4' }}
                                        className="mr-5 relative top-5 hover:text-white px-3 rounded-md text-sm font-bold"
                                    >
                                        SIGN IN
                                    </CustomLink>
                            }
                            <button

                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                style={{ backgroundColor: '#64B9B4' }}
                                className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <>

                            <div className="md:hidden" id="mobile-menu">

                                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    <Link to={'/'}><button className='border-header block px-3 text-sm font-bold' style={{ color: '#64B9B4' }} type="button">HOME</button></Link>

                                    {
                                        user && <Link to={'/manage'}><button className='border-header block hover:text-white px-3 text-sm font-bold' style={{ color: '#64B9B4' }} type="button">MANAGE ITEMS</button></Link>

                                    }
                                    {
                                        user && <Link to={'/add'}><button className='border-header block hover:text-white px-3 text-sm font-bold' style={{ color: '#64B9B4' }} type="button">ADD ITEMS</button></Link>

                                    }
                                    {
                                        user && <Link to={'/myitems'}><button className='border-header block hover:text-white px-3 text-sm font-bold' style={{ color: '#64B9B4' }} type="button">MY ITEMS</button></Link>

                                    }

                                    <Link to={'/blogs'}><button className='border-header block px-3 text-sm font-bold' style={{ color: '#64B9B4' }} type="button">BLOGS</button></Link>
                                    <Link to={'/contact'}><button className='border-header block px-3 text-sm font-bold' style={{ color: '#64B9B4' }} type="button">CONTACT</button></Link>
                                </div>

                            </div>
                        </>
                    )}
                </Transition>
            </nav>
        </div>
    );
};

export default Headers;