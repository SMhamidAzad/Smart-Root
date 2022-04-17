import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../.firebase.init';

const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

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
        console.log(passValue.length);
        if (passValue.length>=6) {
            setUserDetails({ ...userDetails, password: passValue });
            setAllError({ ...allError, passWordError: "" })
        }
        else {
            setAllError({ ...allError, passWordError: "Password at least 6 characters!" });
            setUserDetails({ ...userDetails, password: "" })
        }
    }
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
    const handleSignUp = event => {
        event.preventDefault();
        console.log(userDetails);
    }
    return (
        <div className='form-container'>
            <div className='form'>
                <h2>SignUp</h2>
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
                    <div className='input-div'>
                        <label htmlFor="confirmPass">Confirm Password</label>
                        <div className='input-field'>
                            <input onChange={handleConfirmPassChange} type="password" name="confirmPass" id="confirmPass" />
                        </div>
                    </div>


                    <button className='submit-btn'>SignUp</button>
                </form>
                <p>Already have an Account? <Link to='/login'>Please Login</Link></p>
            </div>

        </div>
    );
};

export default SignUp;



