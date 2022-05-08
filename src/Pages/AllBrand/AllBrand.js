import React from 'react';

const AllBrand = () => {
    return (
        <div className='mx-10 font-custom-home'>
            <div className=' mt-32 mb-16'>
                <h1 className='font-bold text-4xl mb-5 text-center'>OUR ALL <span style={{ color: '#64B9B4' }}>BRAND</span></h1>
                <div className='md:grid grid-cols-3 gap-5'>
                    <div className='p-10 mb-10 shadow-xl'>
                        <h1 className='text-center text-xl font-bold'>Levi's<span style={{ color: '#64B9B4' }}>®</span></h1>
                    </div>
                    <div className='p-10 mb-10 shadow-xl'>
                        <h1 className='text-center text-xl font-bold'>Dockers<span style={{ color: '#64B9B4' }}>®</span></h1>
                    </div>
                    <div className='p-10 mb-10 shadow-xl'>
                        <h1 className='text-center text-xl font-bold'>Signature by Levi Strauss & Co.<span style={{ color: '#64B9B4' }}>™</span></h1>
                    </div>
                    <div className='p-10 mb-10 shadow-xl'>
                        <h1 className='text-center text-xl font-bold'>Beyond Yoga<span style={{ color: '#64B9B4' }}>™</span></h1>
                    </div>
                    <div className='p-10 mb-10 shadow-xl'>
                        <h1 className='text-center text-xl font-bold'>Denizen® From Levi's<span style={{ color: '#64B9B4' }}>®</span></h1>
                    </div>
                    <div className='p-10 mb-10 shadow-xl'>
                        <h1 className='text-center text-xl font-bold'>Denim<span style={{ color: '#64B9B4' }}>®</span></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBrand;