import React from 'react';
import './LearnerExperiencesSection.css';

const reviews = [
    {
        name: 'Vedashree',
        position: 'Software Engineer, Wipro',
        review: 'Suesys Learning helped me build my career from scratch. I enrolled in the program to build programming skills and start a tech career. The program helped me develop strong tech foundations. This depth of understanding gave me the confidence to clear the tech rounds.',
        img: 'https://suesyslearning.com/storage/reviews/student/7iMxrt9bUvZ1H8Ojju6LYugSRKbIe8xDpdeuBf3i.png',
    },
    {
        name: 'P. Ganesh',
        position: 'Python Developer, Wipro',
        review: 'I found Suesys Learning when I was looking for a platform to learn Python I am very impressed with the content and how trainers teach engagingly. The mentors here are very interactive, and the team is always ready to solve any query. It\'s a highly recommended platform for everyone!',
        img: 'https://suesyslearning.com/storage/reviews/student/mPCf79ccRNNHZ37IZVUBRWcAklfdh9m6rtGoankw.png',
    },
    // Add more reviews as needed
];

const LearnerExperiencesSection = () => {
    return (
        <section className="feedback-area review-section feedback-area-three feedback-area-style ptb-40">
            <div className="container">
                <div className="section-title text-center">
                    <h2>Hear About Suesys Learners' Experiences</h2>
                </div>
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="review-slider owl-theme owl-carousel">
                            {reviews.map((review, index) => (
                                <div className="feedback-item" key={index}>
                                    <div className="card">
                                        <div className="row align-items-center">
                                            <div className="col profile-pic">
                                                <img src={review.img} alt={review.name} />
                                            </div>
                                            <div className="col-md-9">
                                                <div>{review.name}</div>
                                                <h6>{review.position}</h6>
                                            </div>
                                        </div>
                                        <p className="review-text">{review.review}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <br />
                        <a href="https://suesyslearning.com/reviews" className="default-btn-login">View all</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearnerExperiencesSection;
