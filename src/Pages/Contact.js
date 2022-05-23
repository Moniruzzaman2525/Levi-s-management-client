import React from 'react';

const Contact = () => {
    return (
        <div className='mb-10'>
            <h2 style={{ color: '#64B9B4' }} className='text-center font-bold mt-10 text-2xl'>LET'S TALK</h2>
            <h4 className='text-center mb-10 text-xl'>don't hasitate to ask a question</h4>
            <form className='w-3/6 mx-auto'>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" placeholder="Your Name" name="floating_email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400 " required />
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="email" placeholder="Your Email" name="floating_email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400 " required />
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" placeholder="Your Subject" name="floating_email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400 " required />
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" placeholder="Your Number" name="floating_email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400 " required />
                    <textarea type="text" placeholder="Your Message" name="floating_email" className="bg-gray-50 border mt-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400  focus:border-teal-400  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-400  dark:focus:border-teal-400 " required />
                </div>
                <button type="submit" className="text-white rounded px-5 py-4 text-xl font-bold sign-btn">SUBMIT YOUR MESSAGE</button>

            </form>
        </div>
    );
};

export default Contact;