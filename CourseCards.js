import React from 'react';

const CourseCards = ({ course }) => (
  <div className="card">
    <a href={course.link}>
      <img src={course.imgSrc} className="card-img-top" alt="Course" />
    </a>
    <div className="card-body">
      <div className="course-details">
        <div className="course-logo">
          <img src={course.companyLogo} alt="Company Logo" />
        </div>
        <a href={course.link} className="course-title">
          <h3>{course.title}</h3>
        </a>
        <p className="course-info">
          <span>Start Date:</span> {course.startDate} <br />
          <span>Duration:</span> {course.duration}
        </p>
        <div className="course-footer">
          <div className="price">{course.price}</div>
          <a href={course.link} className="enroll-btn">
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default CourseCards;
