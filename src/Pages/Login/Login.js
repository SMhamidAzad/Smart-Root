import React from 'react';

const Login = () => {
    return (
        <div className='form-container'>
            <div className='form'>
                <h2>Login</h2>
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
                    


                    <button className='submit-btn'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;