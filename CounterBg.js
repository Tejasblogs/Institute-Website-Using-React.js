import React from 'react';
import './CounterBg.css'; // Assuming you have a CSS file for styles

const CounterBg = () => {
  return (
    <section className="counter-bg hide-in-desktop">
      <div className="row">
        <div className="col-lg-12 col-sm-6">
          <div className="single-counter">
            <div className="counter-shape shape-2">
              <h3 style={{ color: '#fff' }}>
                <span className="odometer" data-count="10,337.00">00</span>
                <span style={{ fontWeight: 'normal' }}>Register Members</span>
                <span className="liveClasses" style={{ fontWeight: 'normal', color: '#f5ab27', paddingLeft: '20px', borderLeft: '1px solid #fff', marginLeft: '20px' }}>
                  <span style={{ fontSize: '30px', verticalAlign: 'middle', fontWeight: 'bold' }}>4</span> 
                  Live Classes
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterBg;
