import React from 'react';
import './ServicesSection.css'; // Import the CSS file for styles

const ServicesSection = () => {
    return (
        <section className="event-area-two education-area-two ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="section-title">
                            <span>What we provide</span>
                            <h2>Our Services</h2>
                        </div>
                        <div className="education-img-wrap">
                            <div className="education-img-2">
                                <img src="https://suesyslearning.com/assets/img/services_img.png" alt="Our Services" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6">
                                <div className="single-tutor one" style={{ minHeight: '328px' }}>
                                    <i className="flaticon-instructor-1"></i>
                                    <h3>Fast Track Training</h3>
                                    <p>Fast track training gets you working in a field as soon as possible with Education
                                        and experience
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="single-tutor two">
                                    <i className="flaticon-instructor"></i>
                                    <h3>Online Training</h3>
                                    <p>Complete your course with Online Programs. Learning and Working at the Same Time is
                                        now Possible. Enroll Live Classes with Flexible Fee Payment
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="single-tutor three">
                                    <i className="flaticon-certificate-1"></i>
                                    <h3>Corporate Training</h3>
                                    <p>Customized courses to meet client requirements across the software industry</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="single-tutor four" >
                                    <i className="flaticon-consulting"></i>
                                    <h3 >Weekend Training</h3>
                                    <p>Our Weekend training courses deliver education for professionals with an aim to
                                        complete the same within a short period of time
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
