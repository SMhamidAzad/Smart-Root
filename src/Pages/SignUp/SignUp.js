import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../.firebase.init';
import { sendEmailVerification } from 'firebase/auth';

const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{ sendEmailVerification: true});

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
    useEffect(()=>{
        if(user){
            navigate("/")
        }
    },[user])

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
        if (passValue.length>=6) {
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
        createUserWithEmailAndPassword(userDetails.email,userDetails.password);
        console.log("user successfully created", user);
    }


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
                            id="email" />
                        </div>
                    </div>
                {allError?.emailError && <p className='text-danger'>❌{allError.emailError}</p>}

                    <div className='input-div'>
                        <label htmlFor="password">Password</label>
                        <div style={{ position: "relative" }} className='input-field'>
                            <input 
                            onChange={handlePasswordChange} type="password" 
                            name="password" 
                            id="password" />
                        </div>
                    </div>
                    {allError?.passWordError && <p className='text-danger'>❌{allError.passWordError}</p>}
                    <div className='input-div'>
                        <label htmlFor="confirmPass">Confirm Password</label>
                        <div className='input-field'>
                            <input 
                            onChange={handleConfirmPassChange} type="password" 
                            name="confirmPass" 
                            id="confirmPass" />
                        </div>
                    </div>
                    <button className='submit-btn'>SignUp</button>
                </form>

                <p className='mt-3'>Already have an Account? <Link to='/login' className='text-decoration-none fw-bolder'>Please Login</Link></p>
            </div>

        </div>
    );
};

export default SignUp;



