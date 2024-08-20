import React from 'react';

const CourseCard = ({ course }) => (
  <div className="col">
    <div className="card h-100">
      <div className="card-image">
        <a href={course.link}>
          <img src={course.imgSrc} alt="Course" />
        </a>
      </div>
      <div className="card-body">
        <div className="course-content">
          <div className="course-logo">
            <img src="assets/img/partner-logo-3.png" alt="Partner Logo" />
          </div>
          <div className="course-logo">
            <img src={course.companyLogo} alt="Company Logo" />
          </div>
          <a href={course.link} className="mt20" style={{ display: 'block' }}>
            <h3>{course.title}</h3>
            <p>Start Date: {course.startDate} <br /> Duration: {course.duration}</p>
          </a>
        </div>
      </div>
      <div className="card-footer">
        <ul className="lessons">
          <li className="price-box">{course.price}</li>
          <li className="float">
            <a href={course.link} className="default-btn" style={{ padding: '5px 20px' }}>
              Enroll Now
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default CourseCard;
