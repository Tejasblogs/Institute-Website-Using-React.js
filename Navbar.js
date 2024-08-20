import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a CSS file for styles

const Navbar = () => {

  return (
    
    <div className="navbar-area"style={{position:'fixed',backgroundColor:'white'}}>
     
      <div className="mobile-nav">
        <Link to="/" className="logo">
          <img src="https://suesyslearning.com/assets/img/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="main-nav">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md">
            <Link className="navbar-brand" to="/">
              <img src="https://suesyslearning.com/assets/img/logo.png" alt="Logo" />
            </Link>
            <div className="collapse navbar-collapse mean-menu justify-content-end">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/courses" className="nav-link">
                    All Courses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/placements" className="nav-link">
                    Placements
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/reviews" className="nav-link">
                    Reviews
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/instructor" className="nav-link">
                    For Instructor
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/forgot-password" className="nav-link">
                    Forgot Password
                  </Link>
                </li>
                <li className="nav-item">
                  <div className="register">
                    <Link to="/register" className="default-btn-login" style={{ marginRight: '0px' }}>
                      Sign Up
                    </Link>
                    <Link to="/login" className="default-btn-login">
                      Login
                    </Link>
                  </div>
                </li>
              </ul>
              
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
