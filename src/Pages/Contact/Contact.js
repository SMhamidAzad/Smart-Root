import React from 'react';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import './Contact.css'

const Contact = () => {
    return (
        <div className='row row-cols-md-2 py-5 m-0 mb-5'>
            <div className='row-md-4'>
                <img style={{ width: "85%" }} src="https://i.ibb.co/3ym9MJS/raj-rana-z-CQs-BI7-Zlt-Q-unsplash-1.png" alt="" />
            </div>
            <div>
                <p style={{ marginBottom: "-7px" }} className='primary-color'>Stay Tuned</p>
                <h2 className='contact-title mb-5 primary-color'>I am Available 24/7!</h2>
                <p className='mb-5 primary-color'>Contact with me within 10Am to 6PM via phone. Also you can meet with me in my Chittagong Office. Also you need to contact with me for any kind of issue, Please mail me personally in belows email account. Stay with me. </p>
                <div className="row row-cols-md-3">
                    <div>
                        <div style={{ lineHeight: "1.1" }} className='d-flex'>
                            <p className='icon-style'><MdOutlineAlternateEmail /></p>
                            <div className='mt-2 ms-2'>
                                <h5 className='primary-color'>Email</h5>
                                <p className='primary-color'>info@smartroot.com</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{ lineHeight: "1.1" }} className='d-flex'>
                            <p className='icon-style'><FiPhone /></p>
                            <div className='mt-2 ms-2'>
                                <h5 className='primary-color'>Phone</h5>
                                <p className='primary-color'>+8801222222234</p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div style={{ lineHeight: "1.1" }} className='d-flex'>
                            <p className='icon-style'><GoLocation /></p>
                            <div className='mt-2 ms-2'>
                                <h5 className='primary-color'>Address</h5>
                                <p className='primary-color'>Muradpur, Ctg</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;