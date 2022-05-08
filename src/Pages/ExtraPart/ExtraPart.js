import React from 'react';
import { Link } from 'react-router-dom';

const ExtraPart = () => {
    return (
        <div className='font-custom-home flex flex-col md:flex-row'>
            <div className='md:order-1 order-2'>
                <img src="https://s7d2.scene7.com/is/image/lscoecomm/collina%20strada_5050module_?fmt=pjpeg&qlt=70,1&resMode=bisharp&wid=600&fit=crop,0" alt="" />
            </div>
            <div className='md:mt-20 text-center md:ml-32 md:order-2 order-1 mb-10'>
                <h4 className='text-xl mb-10 '>The Drop</h4>
                <h2 className='text-2xl mb-10'>LEVI'S® X COLLINA STRADA</h2>
                <p className='text-lg'>For Spring, we teamed up with Hillary <br /> Taymour and her brand and social platform <br /> Collina Strada on a bright, garden-inspired <br /> denim capsule collection.</p>
                <Link to={'/manage'}>
                    <button className='font-extrabold text-xl mt-10 z-50 md:text-2xl text-center right-0 left-0 bottom-0 top-[0]'>
                        <span className='border-header'>EXPLORE THE COLLECTION</span>
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default ExtraPart;