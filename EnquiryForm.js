import React, { useState } from 'react';
import './EnquiryForm.css';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    course: '',
  });

  const [alert, setAlert] = useState({ type: '', message: '', show: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    const successCondition = true; // Replace this with actual condition

    if (successCondition) {
      setAlert({ type: 'success', message: 'Enquiry submitted successfully!', show: true });
    } else {
      setAlert({ type: 'danger', message: 'There was an error submitting your enquiry.', show: true });
    }
  };

  return (
    <div className="sliding_form_container">
      <div className="sliding_form">
        <a href="#" id="form_trigger">Enquiry</a>
        <div className="sliding_form_inner">
          <form onSubmit={handleSubmit} id="enquiry-form">
            {alert.show && (
              <div className={`alert alert-${alert.type}`}>
                {alert.message}
              </div>
            )}
            <input type="hidden" name="_token" value="eSpnQcZLJaHCl5xkJGaE8CIv2MrVkKRREEyCXC4U" />
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="" className="fields_box" value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="" className="fields_box" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" name="phone" placeholder="" className="fields_box" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Country</label>
              <select className="fields_box select2" name="country" value={formData.country} onChange={handleChange}>
                <option value="" disabled>--Select Country--</option>
                <option value="99">India</option>
              </select>
            </div>
            <div className="form-group">
              <label>Course Interested In</label>
              <select className="fields_box select2" name="course" value={formData.course} onChange={handleChange}>
                <option value="" disabled>--Select Course--</option>
                <option value="143">Python - Full Course</option>
                <option value="144">SAP FICO + S4 Hana - Full Course</option>
                <option value="145">Front End Development</option>
                <option value="146">SAP MM with S4 HANA</option>
                <option value="147">Manual & Selenium Testing</option>
                <option value="148">Full Stack - Full Course</option>
                <option value="149">Data Analysis</option>
                <option value="151">Data Analysis - Full Course</option>
                <option value="153">Python - Full Course</option>
                <option value="154">Python - Full Course</option>
              </select>
            </div>
            <div className="form-group text-right">
              <button type="submit" className="btn enquiry-submit-btn default-btn-login">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
