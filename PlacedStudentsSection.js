import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import './PlacedStudentsSection.css'; // Assuming you have a CSS file for the styles

const PlacedStudentsSection = () => {
    const students = [
        {
            name: 'Rama Krishna Reddy',
            location: 'India',
            position: 'Aws Administrator',
            image: 'https://suesyslearning.com/storage/placements/students/FtLTjnDhgxiuO7jI4vt8SGt3OKSrVWru5hSM9o8N.jpg',
            companyLogo: 'https://suesyslearning.com/storage/placements/company/9OfMZigz7WQGqmnKZJ5SFm3vyWIDTwAXxFZHK5sG.png'
        },
        {
            name: 'Ankit Sarkar',
            location: 'India',
            position: 'Fico Consultant',
            image: 'https://suesyslearning.com/storage/placements/students/YguasNLV0Nj9lKjjTfU3O0ijtfwQvpQWluOvUEWB.jpg',
            companyLogo: 'https://suesyslearning.com/storage/placements/company/dI0ewEOMeo7N8hENUaogFzCtmwhiDfGM5MYYIK0u.png'
        },
        {
            name: 'Manmohan Jha',
            location: 'India',
            position: 'Database Administrator',
            image: 'https://suesyslearning.com/storage/placements/students/94Bg2rGbv81fFOVidfiE6CByVOnTg2hyyZZ5SPYj.jpg',
            companyLogo: 'https://suesyslearning.com/storage/placements/company/ZOEjzPLQKwP5NDk8IAdmHTsWjgFjGhHsMsVHzXIZ.png'
        },
        {
            name: 'J. Pavan Kumar',
            location: 'India',
            position: 'Fico Consultant',
            image: 'https://suesyslearning.com/storage/placements/students/zhRWTxHEIAkVy2lyiPsXLLJyOdOFhRHr701LgMgn.jpg',
            companyLogo: 'https://suesyslearning.com/storage/placements/company/vS3AvXIOFH0cVXp0PWS3xaEpeCFwx0kqjhkq0pLh.jpg'
        }
    ];

    return (
        <section className="feedback-area feedback-area-three placed-std feedback-area-style ptb-40">
            <div className="container">
                <div className="section-title">
                    <span className="text-white">Our Students</span>
                    <h2 className="text-white">Got Placed</h2>
                </div>
                <OwlCarousel
                    className="feedback-slider owl-theme"
                    loop
                    margin={10}
                    nav
                    responsive={{
                        0: {
                            items: 1
                        },
                        600: {
                            items: 2
                        },
                        1000: {
                            items: 3
                        }
                    }}
                >
                    {students.map((student, index) => (
                        <div className="feedback-item" key={index}>
                            <div style={{ backgroundImage: `url(${student.image})` }} className="student-img"></div>
                            <div className="feedback-title">
                                <h3>{student.name}</h3>
                                <span className="std-location">
                                    <img src="assets/img/location-pin.jpg" alt="Location Pin" /> {student.location}
                                </span>
                                <h5>Got Placed</h5>
                                <div className="arrow-img">
                                    <img src="assets/img/d-arrow.jpg" alt="Arrow" />
                                </div>
                                <h5>{student.position}</h5>
                                <div className="company-logo-holder">
                                    <img src={student.companyLogo} alt={`${student.position} Logo`} />
                                </div>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <br />
                        <a href="https://suesyslearning.com/placements" className="default-btn-login">View all</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlacedStudentsSection;
