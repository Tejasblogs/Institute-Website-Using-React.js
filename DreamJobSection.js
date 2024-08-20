import React from 'react';
import './DreamJobSection.css'; // Assuming you create DreamJobSection.css for styling

const DreamJobSection = () => {
    return (
        <section className="ptb-40 dream-job" style={{backgroundColor:'white'}}>
            <div className="container">
                <div className="section-title">
                    <h2>Get Your Dream Job</h2>
                    <p>
                        Every one of us wants to be something when we grow up. We dream to achieve
                        something big right from our childhood. There are millions of job professions
                        to choose from. And a specific profession we choose is called a Dream Job.
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="placement">
                            <h3>Our Placement Stats</h3>
                            <div className="card">
                                <p>Maximum salary hike</p><span>200%</span>
                            </div>
                            <div className="card">
                                <p>Average salary hike</p><span>100%</span>
                            </div>
                            <div className="card">
                                <p>Placement success rate</p><span>95%</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <h3 className="review-header">Our Alumni work in Top Companies</h3>
                        <div className="company-cards">
                            {/* Assuming these images are locally stored in your project */}
                            <div className="company-logos"><img src="https://suesyslearning.com/assets/img/companyLogos/delloit.png"
                             /></div>


                            <div className="company-logos"><img src="https://suesyslearning.com/assets/img/companyLogos/miscrosoft.png" alt="Image" /></div>

                            <div className="company-logo"><img src="https://suesyslearning.com/assets/img/companyLogos/apple.png" /></div>
                    
                            <div className="company-logos"><img src="	https://suesyslearning.com/assets/img/companyLogos/BOA.png" alt="Image" /></div>

                            <div className="company-logos"><img src="	https://suesyslearning.com/assets/img/companyLogos/capgi.png" alt="Image" /></div>

                            <div className="company-logos"><img src="	https://suesyslearning.com/assets/img/companyLogos/wallMart.png" alt="Image" /></div>

                            <div className="company-logos"><img src="	https://suesyslearning.com/assets/img/companyLogos/facebook.png" alt="Image" /></div>

                            <div className="company-logos"><img src="	https://suesyslearning.com/assets/img/companyLogos/google.png" alt="Image" /></div>

                            <div className="company-logos"><img src="	https://suesyslearning.com/assets/img/companyLogos/hcl.png" alt="Image" /></div>

                            <div className="company-logos"><img src="	https://suesyslearning.com/assets/img/companyLogos/hdfc.png" alt="Image" /></div>

                            <div className="company-logos"><img src="	https://suesyslearning.com/assets/img/companyLogos/ibm.png" alt="Image" /></div>

                            <div className="company-logos"><img src="	https://suesyslearning.com/assets/img/companyLogos/jp.png" alt="Image" /></div>

                            <div className="company-logos"><img src="	https://suesyslearning.com/assets/img/companyLogos/cogni.png" alt="Image" /></div>

                            <div className="company-logos"><img src="	https://suesyslearning.com/assets/img/companyLogos/oracle.png" alt="Image" /></div>

                            <div className="company-logos"><img src="	https://suesyslearning.com/assets/img/companyLogos/sap.png" alt="Image" /></div>

                            <div className="company-logos"><img src="	https://suesyslearning.com/assets/img/companyLogos/suesys.png" alt="Image" /></div>

                            <div className="company-logos"><img src="	https://suesyslearning.com/assets/img/companyLogos/tcs.png" alt="Image" /></div>

                            <div className="company-logos"><img src="	https://suesyslearning.com/assets/img/companyLogos/visa.png" alt="Image" /></div>

                            <div className="company-logos"><img src="	https://suesyslearning.com/assets/img/companyLogos/amazone.png" alt="Image" /></div>

                            <div className="company-logos"><img src="	https://suesyslearning.com/assets/img/companyLogos/jp.png" alt="Image" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DreamJobSection;
