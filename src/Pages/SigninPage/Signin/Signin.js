import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import { IoLogoGoogleplus } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
import { RiFacebookCircleFill } from 'react-icons/ri';

const Signin = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        other: "",
    })
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleEmailChange = event => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(event.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: event.target.value });
            setErrors({ ...errors, email: "" })
        } else {
            setErrors({ ...errors, email: "Invalid Email" });
            setUserInfo({ ...userInfo, email: "" })
        }

    }
    const handlePassChange = event => {
        const passwordRegex = /.{6}/;
        const validPassword = passwordRegex.test(event.target.value);
        if (validPassword) {
            setUserInfo({ ...userInfo, password: event.target.value });
            setErrors({ ...errors, password: "" })
        } else {
            setErrors({ ...errors, password: "Minium 6 Characters!!" });
            setUserInfo({ ...userInfo, password: "" })
        }

    }
    const handleSignIn = async event => {
        event.preventDefault();
        const email = userInfo.email;
        await signInWithEmailAndPassword(userInfo.email, userInfo.password);
        const { data } = await axios.post('https://hidden-crag-72651.herokuapp.com/login', { email });
        localStorage.setItem('accessToken', data.accessToken)
        console.log(data);
        navigate(from, { replace: true });
    }
    useEffect(() => {
        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                    toast.error('Invalid Email');
                    break;
                case "auth/user-not-found":
                    toast.error("Please Register")
                    break;
                case "auth/invalid-password":
                    toast.error("Wrong Password");
                    break;
                case "something went wrong":
                default:
                    break
            }
        }
    }, [error]);




    return (
        <div className='md:grid grid-cols-2'>
            <div className=''>
                <h2 className='text-center text-3xl py-10'>Sign in to....</h2>
                <div className='flex justify-center'>
                    <RiFacebookCircleFill className='mr-5'></RiFacebookCircleFill>
                    <IoLogoGoogleplus className='mr-5'></IoLogoGoogleplus>
                    <FaGithub className='mr-5'></FaGithub>
                </div>
                <p className='text-center'>or use your email account</p>
                <div className='w-3/6 mx-auto py-20 h-[50vh]'>
                    <form onSubmit={handleSignIn}>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" onChange={handleEmailChange} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            {errors?.email && <p className='text-red-600 font-bold mt-2'>{errors.email}</p>}
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                            <input type="password" onChange={handlePassChange} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            {errors?.password && <p className='text-red-600 font-bold mt-2'>{errors.password}</p>}
                        </div>

                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        <p>Don't have an account? <Link to="/signup">Signup</Link></p>
                    </form>
                </div>
            </div>
            <div className="login-img relative">
                <div className='absolute bottom-0 left-0 right-0 top-[40%] '>
                    <h1 className='text-center text-4xl mb-10 font-bold'>Hello, Friend</h1>
                    <h5 className='text-center text-xl'>Enter your personal details <br /> and start journey with us</h5>
                </div>
            </div>
        </div>
    );
};

export default Signin;