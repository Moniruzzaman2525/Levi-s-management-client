import React from 'react';
import { IoLogoGoogleplus } from 'react-icons/io';
import { FiGithub } from 'react-icons/fi';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../../SharePage/Loading/Loading'
import useToken from '../../../Hooks/useToken';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const [token] = useToken(googleUser || githubUser);
    const googleSignIn = async () => {
        await signInWithGoogle();
        if (googleError) {
            toast.error('User Cancel POP UP!!!')
        };
        if (googleUser) {
            toast.success('Sign In Successfully', { 'id': 'success' })
        }
    };
    const githubSingIn = () => {
        signInWithGithub();
        if (githubError) {
            toast.error('User Cancel POP UP!!!')
        };
        if (githubUser) {
            toast.success('Sign In Successfully', { 'id': 'success' })
        }
    };



    if (googleLoading || githubLoading) {
        <Loading></Loading>
    }

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    if (token) {
        navigate(from, { replace: true });
    }
    return (
        <div className='flex mb-5 justify-center'>
            <button onClick={googleSignIn} className='rounded-full p-5 mr-10 bg-white'><IoLogoGoogleplus className='text-xl'></IoLogoGoogleplus></button>
            <button onClick={githubSingIn} className='rounded-full p-5 mr-10 bg-white'><FiGithub className='text-xl'></FiGithub></button>
        </div>
    );
};

export default SocialLogin;