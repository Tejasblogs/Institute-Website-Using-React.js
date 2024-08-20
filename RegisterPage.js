import React from 'react';
import './RegisterPage.css';

const RegisterPage = () => (
    <section className="register-page-section fa-bg-color">
        <div className="container">
            <div className="job-posting py-4">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h1 className="mb-4">Learn courses without limits from the professional instructors</h1>
                        <a href="https://suesyslearning.com/register" className="btn default-btn">Register Now!</a>
                    </div>
                    <div className="col-12 col-md-6"style={{width:400, marginBottom:90}}>
                        <img src="https://suesys.com/assets/v1/images/post-job.svg" alt="Post Job" className="post-job-img"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default RegisterPage;
