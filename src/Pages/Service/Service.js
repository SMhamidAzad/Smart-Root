import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const {img,name,price,description}= service
    return (
        <div className='col-md-4'>
            <div className='w-100 mx-auto'>
            <img className='w-75 h-50' src={img} alt="" />
            </div>
            <div className=' '>
            <h5>{name}</h5>
            <h4>{price}</h4>
            <p>{description}</p>
            <Link to='/checkout'>CheckOut</Link>
            </div>
        </div>
    );
};

export default Service;