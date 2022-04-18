import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../.firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
   
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [allError, setAllError] = useState({
        emailError: "",
        passWordError: "",
        others: ""
    })

    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            
            navigate(from, { replace: true });
            toast.success("User Successfully Login")
        }
    }, [user])
    useEffect(()=>{
        if(error){
            toast.error(error.message)
        }
    },[error])

    // reset password 
    const passwordReset = async () => {
        const email = userDetails.email;
        console.log(email);
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Please check your email and reset password');
        }
        else{
            toast.error('Please Fill your email in field');
        }
    }

    //   get email input value and validation check 
    const handleEmailChange = event => {
        const emailValue = event.target.value;
        const emailChecker = /\S+@\S+\.\S+/;
        if (emailChecker.test(emailValue)) {
            setUserDetails({ ...userDetails, email: emailValue });
            setAllError({ ...allError, emailError: "" })
        }
        else {
            setAllError({ ...allError, emailError: "Incorrect Email!" })
            setUserDetails({ ...userDetails, email: "" })
        }
    }

    //   get password input value and validation check 
    const handlePasswordChange = event => {
        const passValue = event.target.value;
        if (passValue.length >= 6) {
            setUserDetails({ ...userDetails, password: passValue });
            setAllError({ ...allError, passWordError: "" })
        }
        else {
            setAllError({ ...allError, passWordError: "Password at least 6 characters!" });
            setUserDetails({ ...userDetails, password: "" })
        }
    }


    // login user with clicking login button 
    const handleSignUp = event => {
        event.preventDefault();
        signInWithEmailAndPassword(userDetails.email, userDetails.password);
        console.log("user successfully login", user);
    }

    return (
        <div className='form-container'>
            <div className='form'>
                <h2>Login</h2>
                <form onSubmit={handleSignUp}>
                    <div className='input-div'>
                        <label htmlFor="email">Email</label>
                        <div className='input-field'>
                            <input onChange={handleEmailChange} type="text" name="email" id="email" />
                        </div>
                    </div>
                    {allError?.emailError && <p className='text-danger'>❌{allError.emailError}</p>}
                    <div className='input-div'>
                        <label htmlFor="password">Password</label>
                        <div style={{ position: "relative" }} className='input-field'>
                            <input onChange={handlePasswordChange} type="password" name="password" id="password" />

                        </div>
                    </div>
                    {allError?.passWordError && <p className='text-danger'>❌{allError.passWordError}</p>}
                    <button className='submit-btn'>Login</button>
                </form>
                <p className='mt-3'>New to Smart Root? <Link to='/signup' className='text-decoration-none fw-bolder'>Please Register</Link></p>

                <p>Forget Password?<button onClick={passwordReset} className='border-0 fw-bolder bg-white'>Reset Password</button></p>

                <SocialLogin></SocialLogin>
              
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Login;