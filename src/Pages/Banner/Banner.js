import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='row h-100 m-0'>
                <div className="col-md-6 d-flex justify-content-center my-auto">
                    <div data-aos="zoom-out-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <h1 className='title-first-part'>Your</h1>
                        <h1 className='title-last-part'>Dream Architect!</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;