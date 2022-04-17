import React from 'react';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className='form-container'>
            <div className='form'>
                <h2>SignUp</h2>
                <form>
                    <div className='input-div'>
                        <label htmlFor="name">Email</label>
                        <div className='input-field'>
                            <input type="text" name="email" id="email" />
                        </div>
                    </div>
                    {/* {errors?.email && <p className='text-danger'>❌{errors.email}</p>} */}
                    <div className='input-div'>
                        <label htmlFor="password">Password</label>
                        <div style={{position: "relative"}} className='input-field'>
                            <input  type="password" name="password" id="password" />
                            
                        </div>
                    </div>
                    {/* {errors?.password && <p className='text-danger'>❌{errors.password}</p>} */}
                    <div className='input-div'>
                        <label htmlFor="confirmPass">Confirm Password</label>
                        <div className='input-field'>
                            <input  type="password" name="confirmPass" id="confirmPass" />
                        </div>
                    </div>


                    <button className='submit-btn'>SignUp</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;