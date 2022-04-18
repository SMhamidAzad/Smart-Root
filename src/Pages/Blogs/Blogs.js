import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container my-5'>
            <h2 className='text-center primary-color my-3'><u>Q & A</u></h2>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100 blog border-0 px-3 py-3">
                        <div className="card-body">
                            <h5 className="card-title"> Difference between authorization and authentication</h5>
                            <p className="card-text">Authentication and authorization, this two are used for sercurity and persimission issue. Authentication is used for cheeck's a person details to identify him.So, it is the process of verifying the identify of a user. On the other hand, authentication determines what users can and can't access. For authentication, usually needs a username and a password and its occurs before authorization. Authorization occurs after authentication.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 blog border-0 px-3 py-3">
                        <div className="card-body">
                            <h5 className="card-title">Why are you using firebase? What other options do you have to implement authentication?</h5>
                            <p className="card-text">We use firebase in our praject because it is easy to start a project with firebase. We can easily used it for authentication, hosting, cloud messsaging and real time database. It makes secure authenticaton. It provides an end-to-end identity solution, supporting email and password accounts, Google auth and phone, Facebook, Github, Twitter, play store signin, signout,verification and more.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 blog border-0 px-3 py-3">
                        <div className="card-body">
                            <h5 className="card-title">What other services does firebase provide other than authentication</h5>
                            <p className="card-text">Firebase provides many services other than authentication. We can easily deploy our project using firebase. It provides real time database which is a cloud-hosted database. It also provides Cloud Messaging, Cloud Storage, Remote config, Test Lab, Crash Reporting. Cloud storage is used for user generated content and cloud messaging is used to send notification.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>






    );
};

export default Blogs;