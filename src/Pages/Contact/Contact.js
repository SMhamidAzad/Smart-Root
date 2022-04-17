import React from 'react';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import './Contact.css'

const Contact = () => {
    return (
        <div className='row'>
            <div className="col-md-6">
                <img style={{ width: "85%" }} className=' px-4' src="https://i.ibb.co/3ym9MJS/raj-rana-z-CQs-BI7-Zlt-Q-unsplash-1.png" alt="" />
            </div>
            <div className="col-md-6">
                <p>Stay Turned</p>
                <h2>I am Available 24/7!</h2>
                <p>Contact with me within 10Am to 6PM. Also you can meet with me in my Chittagong Office. Also you will me anytime. Stay with me. </p>
                <div className="row">
                    <div className="col-md-4">
                        <p className='icon-style'><MdOutlineAlternateEmail /></p>
                    </div>
                    <div className="col-md-4">
                        <p className='icon-style'><FiPhone /></p>
                    </div>
                    <div className="col-md-4">
                        <p className='icon-style'><GrLocation /></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;