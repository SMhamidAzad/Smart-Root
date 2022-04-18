import React from 'react';
import profile from '../../images/profile.png'
import './About.css'

const About = () => {
    return (
        <div style={{ minHeight: "100vh" }} className=' about'>
            <div className='container'>
                <div className='d-flex justify-content-center'>
                    <img style={{ width: '150px', borderRadius: "50%", marginTop: "80px" }} src={profile} alt="" />
                </div>
                <div className='text-center'>
                    <h2 className='my-3 primary-color'>Hi, I am Syed Md. Abdul Hamid</h2>
                    <p className='primary-color'>I am Junior Frontend Web Developer. I want to a Full Stack Web Developer within 2022. Everyday, I am learning new thing for improve my development skill. I spend more than 6-8 hours to fullfil my goal in 2022.I am also completing my graduation from Computer Science & Enginnering Depertment. My university name is International Islamic University Chittagong.Within one year, I will complete my graduation, Inshallah. Please pray for me for completing my goal.Thank you so much for reading about me.</p>
                </div>
            </div>
        </div>
    );
};

export default About;