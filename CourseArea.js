import React from 'react';
import CourseCards from './CourseCards'; // Assuming correct import path
import './CourseCards.css'; // Import the CSS file for CourseCards styling
import { redirect } from 'react-router-dom';


const courses = [
  {
    title: 'Python - Full Course',
    imgSrc: 'https://suesyslearning.com/storage/courses/lVxzbC5x83kRECtTm2s6OIjqXlxIMP7NmM1NGw8u.jpg',
    link: 'https://suesyslearning.com/course-detail/python-full-course-667b8a1d8cbaf',
    startDate: '03 Jul 2024',
    duration: '60 Days',
    price: 'INR 7,500.00',
    companyLogo: 'https://suesyslearning.com/storage/company_logo/Gwt018BLe83nj3FWvSskO7YHcyfMVA8BOMfKTmGB.png'
  },
  
  {
    title: 'Python - Full Course',
    imgSrc: 'https://suesyslearning.com/storage/courses/lVxzbC5x83kRECtTm2s6OIjqXlxIMP7NmM1NGw8u.jpg',
    link: 'https://suesyslearning.com/course-detail/python-full-course-667b8a1d8cbaf',
    startDate: '03 Jul 2024',
    duration: '60 Days',
    price: 'INR 7,500.00',
    companyLogo: 'https://suesyslearning.com/storage/company_logo/Gwt018BLe83nj3FWvSskO7YHcyfMVA8BOMfKTmGB.png'
  },
  {
    title: 'Python - Full Course',
    imgSrc: '	https://suesyslearning.com/storage/courses/Dif2SKxVkz4elfsi5qbcLN10UU878As5cxhLK4vc.jpg',
    link: 'https://suesyslearning.com/course-detail/python-full-course-667b8a1d8cbaf',
    startDate: '03 Jul 2024',
    duration: '60 Days',
    price: 'INR 7,500.00',
    companyLogo: 'https://suesyslearning.com/storage/company_logo/BPwSLWlanjbDsHkyryJfQnHZ8bseb7xJ2NzzYsOg.jpg'
  },
  {
    title: 'Python - Full Course',
    imgSrc: 'https://suesyslearning.com/storage/courses/Dif2SKxVkz4elfsi5qbcLN10UU878As5cxhLK4vc.jpg',
    link: 'https://suesyslearning.com/course-detail/python-full-course-667b8a1d8cbaf',
    startDate: '03 Jul 2024',
    duration: '60 Days',
    price: 'INR 7,500.00',
    companyLogo: 'https://suesyslearning.com/storage/company_logo/BPwSLWlanjbDsHkyryJfQnHZ8bseb7xJ2NzzYsOg.jpg'
  },
  {
    title: 'Python - Full Course',
    imgSrc: '	https://suesyslearning.com/storage/courses/QbcIwxajKopLKGCWpMO6qnkNbQPIecNiSlX6QPh1.jpg',
    link: 'https://suesyslearning.com/course-detail/python-full-course-667b8a1d8cbaf',
    startDate: '03 Jul 2024',
    duration: '60 Days',
    price: 'INR 7,500.00',
    companyLogo: 'https://suesyslearning.com/storage/company_logo/fZCKgZTDUxoR8mxox8VzvZfvPVZCJzsGXMW8jGig.png'
  },
  {
    title: 'Python - Full Course',
    imgSrc: '	https://suesyslearning.com/storage/courses/oocMIvA4jVOmwaqfc9spTZvfNMGq2RJGwk2YybIh.jpg',
    link: 'https://suesyslearning.com/course-detail/python-full-course-667b8a1d8cbaf',
    startDate: '03 Jul 2024',
    duration: '60 Days',
    price: 'INR 7,500.00',
    companyLogo: 'https://suesyslearning.com/storage/company_logo/3Pf635tYJ1n0kACWRrcnLWBX4wWofOJ9uWt3hFao.jpg'
  },
  {
    title: 'Python - Full Course',
    imgSrc: '	https://suesyslearning.com/storage/courses/q8OCzA3aQkRg4QzPzNlnsxlrzzfjlK6Aq4EQvl8X.jpg',
    link: 'https://suesyslearning.com/course-detail/python-full-course-667b8a1d8cbaf',
    startDate: '03 Jul 2024',
    duration: '60 Days',
    price: 'INR 7,500.00',
    companyLogo: 'https://suesyslearning.com/storage/company_logo/fHtqVkjD0l1BvYbqt8Cpzr1ee4j9zEvaMv2IHetI.jpg'
  },
  {
    title: 'Python - Full Course',
    imgSrc: '	https://suesyslearning.com/storage/courses/qDT9V0oURpqaqOjU4EB8N65b95B65YKCOC3nzjUc.jpg',
    link: 'https://suesyslearning.com/course-detail/python-full-course-667b8a1d8cbaf',
    startDate: '03 Jul 2024',
    duration: '60 Days',
    price: 'INR 7,500.00',
    companyLogo: 'https://suesyslearning.com/storage/company_logo/CYmgxPJalE47wsQMLOeQXg9xcASCnLZPodAQbwCF.png'
  },
  
 
  

  // Add other course objects here...
];



const CoursesArea = () => (
  <section className="courses-area pt-100 pb-70">
    <div className="container">
      <div className="section-title">
        <span>Popular Courses</span>

        
        <h2>Explore top courses</h2>
        
        
        <div className="class-1">
      <div className='class-2'>
       <a href="#"><button type="button" class="btn1">All</button></a>
       
       <a href=""><button type="button" class="btn">Computer Science</button></a>

      <a href=""><button type="button" class="btn">Data Science</button></a> 

      <a href=""><button type="button" class="btn">Marketing</button></a>

       <a href=""><button type="button" class="btn">Accounts & finance</button></a>

       <a href=""><button type="button" class="btn">Software Testing</button></a>

       <a href=""><button type="button" class="btn">Mobile Developmet</button></a>

       <a href=""><button type="button" class="btn">Teaching & Academics</button></a>
       <a href=""><button type="button" class="btn">Language Learning</button></a>
       <a href=""><button type="button" class="btn">Design</button></a>
       <a href=""><button type="button" class="btn">Buisness</button></a>

       <a href=""><button type="button" class="btn">Life Style</button></a>
       <a href=""><button type="button" class="btn">Hardware & Networking</button></a>
       <a href=""><button type="button" class="btn">Amezon</button></a>
       <a href=""><button type="button" class="btn">Sap</button></a>
       <a href=""><button type="button" class="btn">Music</button></a>


       <a href=""><button type="button" class="btn">Human Resourses</button></a>

       </div>
       </div>

      </div>

      <div className="row course-cards">
        {courses.map(course => (
          <div className="col-md-3" key={course.link}>
            <CourseCards course={course} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesArea;
