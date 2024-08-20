import React, { useEffect } from 'react';
import Odometer from 'odometer';
import 'odometer/themes/odometer-theme-default.css';
import './Banner.css';

const LearningBanner = () => {
  useEffect(() => {
    const odometers = document.querySelectorAll('.odometer');
    odometers.forEach(od => {
      new Odometer({
        el: od,
        value: 0,
      });
      od.innerHTML = od.getAttribute('data-count');
    });
  }, []);

  return (
    <section className="learning-banner">
      <div className="container social">
        <div className="row">
          <div className="col-lg-7">
            <div className="banner-content">
              <h1 className="headline" style={{ marginTop: 50 }}>
                Start learning online courses from the 
                <span className="primary-color">
                  Professional Instructors
                </span>
              </h1>
              <div className="search-container">
                <form autoComplete="off" action="https://suesyslearning.com/search" className="search-form">
                  <input
                    id="searchField"
                    className="search-input"
                    type="text"
                    name="search"
                    placeholder="Search Courses"
                  />
                  <button
                    type="submit"
                    className="search-button default-btn"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
            <div className="counter-holder">
              <div className="counter-item">
                <h3 className="counter-text">
                  <span className="odometer" data-count="10337">00</span>
                  <br />
                  <span className="counter-label">Registered Members</span>
                </h3>
              </div>
              <div className="divider"></div>
              <div className="counter-item">
                <h3 className="counter-text">
                  <span className="live-classes-number">4</span>
                  <br />
                  <span className="counter-label">Live Classes</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="counter-bg hide-in-desktop">
        <div className="row">
          <div className="col-lg-12 col-sm-6">
            <div className="single-counter">
              <div className="counter-shape shape-2">
                <h3 className="counter-text">
                  <span className="odometer" data-count="10337">00</span>
                  <span className="counter-label">Registered Members</span>
                  <span className="live-classes" style={{ paddingLeft: '20px' }}>
                    <span className="live-classes-number">4</span>
                    Live Classes
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default LearningBanner;
