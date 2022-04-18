import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../.firebase.init';
import googleLogo from '../../images/social/Google.png'

const SocialLogin = () => {
    
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user])
    return (
        <div>
            <div className='d-flex align-items-center mobile-line'>
                <div 
                       style={{ width: '186px', borderTop: '2px solid gray' }}>

                </div>
                <p className='mt-2 mx-3'>or</p>
                <div  
                      style={{ width: '186px', borderTop: '2px solid gray' }}>    
                </div>
            </div>
            <button 
                onClick={()=>signInWithGoogle()} 
                className='submit-btn google-btn'>
                <img src={googleLogo} alt="" />
                Google Login
            </button>
        </div>
    );
};

export default SocialLogin;