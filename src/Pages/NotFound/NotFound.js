import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='error-container'>
            <h1 className='error-message primary-color'>The page you are looking for is not found!!</h1>
            <h1 className='error-code'>404!</h1>
            <Link to='/' className='back-btn'>Back To Home</Link>
        </div>
    );
};

export default NotFound;