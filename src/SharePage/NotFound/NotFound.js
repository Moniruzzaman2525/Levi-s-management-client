import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center h-[80vh]'>
            <h1 className='text-4xl font-extrabold text-center'>SORRY WE CAN'T FIND THE PAGE <br /> YOU ARE LOOKING FOR.</h1>
            <p className='text-xl mt-10'>Sorry for the inconvenience. Please try again later.</p>
            <Link style={{ backgroundColor: '#64B9B4' }} className='p-5 mt-5 rounded' to={'/'}><button className='text-xl font-bold text-white'>BACK TO HOME PAGE</button></Link>
        </div>
    );
};

export default NotFound;