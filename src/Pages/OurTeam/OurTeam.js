import React from 'react';
import { FaFlag, FaLightbulb } from 'react-icons/fa';
import { AiOutlinePaperClip } from 'react-icons/ai'

const OurTeam = () => {
    return (
        <div className='relative'>
            <div className='team-img mx-auto md:mb-72 relative'>
                <h1 className='font-extrabold text-2xl text-white z-50 md:text-5xl text-center absolute right-0 left-0 bottom-0 top-[40%]'>We love what we do <br /> and we do it with passion</h1>
            </div>
            <div className='md:grid hidden m-20 grid-cols-3 absolute bottom-[-250px]'>
                <div className='p-24 bg-gray-800'>
                    <FaFlag className='text-white z-50'></FaFlag>

                    <h2 className='text-white z-50'>Our Mission</h2>
                    <p className='text-white font-light z-50'>We encourage every team member to be a whole person. We have a flexible, high trust environment that is focused on doing great work.</p>
                </div>
                <div className='p-24 bg-stone-600'>
                    <FaLightbulb className='text-white z-50'></FaLightbulb>
                    <h2 className='text-white z-50'>Our Vision</h2>
                    <p className='text-white z-50'>Our purpose is to build solutions that remove the barriers preventing people from doing their best work, and this is at the heart of how we approach our.</p>
                </div>
                <div className='p-24 bg-green-700'>
                    <AiOutlinePaperClip className='text-white z-50'></AiOutlinePaperClip>
                    <h2 className='text-white z-50'>Our Philosophy</h2>
                    <p className='text-white z-50'>Learning and Growth. We’re building a learning organization, so you not only develop your craft but your ability to partner with others.</p>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;