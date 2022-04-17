import React from 'react';
import './Footer.css'
import facebook from '../../images/social/Facebook.png'
import instagram from '../../images/social/instagram.png'
import twitter from '../../images/social/Twitter.png'
import linkedIn from '../../images/social/LinkedIn.png'

const Footer = () => {
    return (
        <div className='footer text-center text-white'>
        <div className='pt-4'>
        <h6>Smart Root</h6>
            <p>Copyright &copy; {new Date().getUTCFullYear()}, Smart Root</p>
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedIn} alt="" />
        </div>
        </div>
    );
};

export default Footer;