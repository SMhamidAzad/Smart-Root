import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../.firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import SocialLogin from '../SocialLogin/SocialLogin';


const SignUp = () => {

    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

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
    useEffect(() => {
        if (user) {
            toast.success("User Successfully Created")
            navigate("/")
        }
    }, [user])

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

    // get confirm password input value and validation check 
    const handleConfirmPassChange = event => {
        const confirmPassValue = event.target.value
        if (confirmPassValue === userDetails.password) {
            setUserDetails({ ...userDetails, confirmPassword: confirmPassValue });
            setAllError({ ...allError, passWordError: "" })
        }
        else {
            setAllError({ ...allError, passWordError: "Password do not matched!" })
            setUserDetails({ ...userDetails, confirmPassword: "" })
        }
    }

    // create user with clicking signup button 
    const handleSignUp = event => {
        event.preventDefault();
        if(userDetails.password === userDetails.confirmPassword){
            createUserWithEmailAndPassword(userDetails.email, userDetails.password);
        }
        else{
            toast.error("password and confirm password does not matched!!")
        }
        
        console.log("user successfully created", user);
    }

    useEffect(() => {
        if (error) {
           toast.error(error.message)
        }
    }, [error])

    return (
        <div className='form-container'>
            <div className='form'>
                <h2>SignUp</h2>
                <form onSubmit={handleSignUp}>
                    <div className='input-div'>
                        <label htmlFor="email">Email</label>
                        <div className='input-field'>
                            <input
                                onChange={handleEmailChange}
                                type="text"
                                name="email"
                                id="email"
                                required />
                        </div>
                    </div>
                    {allError?.emailError && <p className='text-danger'>❌{allError.emailError}</p>}

                    <div className='input-div'>
                        <label htmlFor="password">Password</label>
                        <div style={{ position: "relative" }} className='input-field'>
                            <input
                                onChange={handlePasswordChange} type="password"
                                name="password"
                                id="password"
                                required />
                        </div>
                    </div>
                    {allError?.passWordError && <p className='text-danger'>❌{allError.passWordError}</p>}
                    <div className='input-div'>
                        <label htmlFor="confirmPass">Confirm Password</label>
                        <div className='input-field'>
                            <input
                                onChange={handleConfirmPassChange} type="password"
                                name="confirmPass"
                                id="confirmPass"
                                required />
                        </div>
                    </div>
                    <button className='submit-btn'>SignUp</button>
                </form>

                <p className='mt-3'>Already have an Account? <Link to='/login' className='text-decoration-none fw-bolder'>Please Login</Link></p>
                <SocialLogin></SocialLogin>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;



