import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../.firebase.init';

const CheckOut = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='form-container'>
            <div className='form'>
                <h2>Confirm your service: </h2>
                <form>
                    <div className='input-div'>
                        <label htmlFor="name">Name</label>
                        <div className='input-field'>
                            <input type="text" name="name" id="name" />
                        </div>
                    </div>
                    <div className='input-div'>
                        <label htmlFor="email">Email</label>
                        <div className='input-field'>
                            <input value={user?.email} readOnly type="text" name="email" id="email" />
                        </div>
                    </div>
                    <div className='input-div'>
                        <label htmlFor="address">Address</label>
                        <div className='input-field'>
                            <input type="text" name="address" id="address" />
                        </div>
                    </div>
                    <div className='input-div'>
                        <label htmlFor="service">Service</label>
                        <div className='input-field'>
                            <input type="text" name="Service" id="service" />
                        </div>
                    </div>
                    <button className='submit-btn'>Confirm Booking</button>
                </form>
           </div>
        </div>
    );
};

export default CheckOut;