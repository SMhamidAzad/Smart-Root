import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { img, name, price, description } = service
    return (
        <div className="col">
            <div className="card border-0 service p-3 rounded-3">
                <img src={img} className="card-img-top rounded-3" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h4 className='service-price'>${price}</h4>
                    <p className="card-text">{description}</p>
                    <Link className='btn-style' to='/checkout'>Order Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;