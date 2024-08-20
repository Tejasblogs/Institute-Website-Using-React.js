import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UniversitySection from './components/UniversitySection';
import LearningBanner from './components/LearningBanner';
import CoursesArea from './components/CourseArea';


import AllCourses from './components/AllCourses';
import Reviews from './components/Reviews';
import Instructor from './components/Instructor';
import ForgotPassword from './components/ForgotPassword';
import Register from './components/Register';
import Login from './components/Login';
import Cart from './components/Cart';
import ServicesSection from './components/ServicesSection';
import PlacedStudentsSection from './components/PlacedStudentsSection';
import LearnerExperiencesSection from './components/LearnerExperiencesSection';
import DreamJobSection from './components/DreamJobSection';
import CertificateSection from './components/CertificateSection';
import RegisterPage from './components/RegisterPage';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <LearningBanner />
      <UniversitySection />
      <CoursesArea />
      <ServicesSection />
      <PlacedStudentsSection />
      <LearnerExperiencesSection />
      <DreamJobSection />
      <CertificateSection />
      <RegisterPage />
      <EnquiryForm />
      <Footer />



      <Routes>
        <Route path="/courses" element={<CoursesArea />} />
        <Route path="/placements" element={<PlacedStudentsSection />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<AllCourses />} />
      </Routes>
    </Router>
  );
}

export default App;
