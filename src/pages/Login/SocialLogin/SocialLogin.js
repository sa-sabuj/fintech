import React from 'react';
import './SocialLogin.css'
import googleIcon from '../../../images/icon/google.png';
import Button from 'react-bootstrap/Button';
import { useSendPasswordResetEmail, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import gitHubIcon from '../../../images/icon/github.png'
import Loading from '../../Shared/Loading/Loading';




const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    
    if(loading){
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>


    }

    if (user || user1) {
        navigate('/home')
    }


    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='m-3'>or </p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            <div className='w-50 mx-auto google'>
                <Button onClick={() => signInWithGoogle()} className='w-100 d-block mx-auto btn btn-primary mb-2'><img style={{ width: 30 }} src={googleIcon} alt="" /> Google Sign In</Button>
                {errorElement}

            </div>
            <div className='w-50 mx-auto google'>
                <Button onClick={() => signInWithGithub()} className='w-100 d-block mx-auto btn btn-primary'><img style={{ width: 30 }} src={gitHubIcon} alt="" /> GitHub Sign In</Button>
                {errorElement}

            </div>
        </div>
    );
};

export default SocialLogin;