import React, { useState } from 'react';
import './CallbackForm.css';

const CallbackForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    class: '',
    goal: '',
    mode: '',
    terms: false,
    authorize: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="callback-container">
      <div className="callback-left-section">
        <img
          src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1732101887/gvq4wnur2wxjvw7jknbg.webp"
          alt="Study Desk"
        />
      </div>
      <div className="callback-right-section">
        <h2>Request a callback</h2>
        <form onSubmit={handleSubmit}>
          <div className="callback-form-grid">
            <div>
                <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
            </div>
            <div>
                <label>Last Name</label>
                 <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
            </div>
           
            <div>
                <label>Mobile Number</label>
                <input
              type="tel"
              name="mobile"
              placeholder="Enter 10 digit mobile number"
              required
              value={formData.mobile}
              onChange={handleChange}
            />
            </div>
            <div>
                <label>Email</label>
                <input
              type="email"
              name="email"
              placeholder="Enter email ID"
              required
              value={formData.email}
              onChange={handleChange}
            />
            </div>
            <div>
                <label>Class</label>
                <select
              name="class"
              required
              value={formData.class}
              onChange={handleChange}
            >
              <option value="">Select class</option>
              <option value="6th">6th</option>
              <option value="7th">7th</option>
              <option value="8th">8th</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
              <option value="11th">11th</option>
              <option value="12th">12th</option>
              <option value="12+">12+</option>
            </select>
            </div>
            <div>
                <label>Goal</label>
                <select
              name="goal"
              required
              value={formData.goal}
              onChange={handleChange}
            >
              <option value="">Select your goal</option>
              <option value="NEET">NEET</option>
              <option value="JEE Mains">JEE Mains</option>
              <option value="JEE Advanced">JEE Advanced</option>
              <option value="CUET">CUET</option>
              <option value="PNCF">PNCF</option>
            </select>
            </div>
            <div>
                <label>Preferred Mode</label>
                <select
              name="mode"
              required
              value={formData.mode}
              onChange={handleChange}
            >
              <option value="">Select Mode</option>
              <option value="Online Courses">Online Courses</option>
              <option value="Classroom Courses">Classroom Courses</option>
              <option value="Online Test Series">Online Test Series</option>
            </select>
            </div>
          </div>

          <div className="callback-checkbox-group">
            <label>
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
              />
              I agree to the terms & conditions
            </label>
            <label>
              <input
                type="checkbox"
                name="authorize"
                checked={formData.authorize}
                onChange={handleChange}
              />
              I authorize ALLEN to contact me via phone/SMS & other channels
            </label>
          </div>

          <button className="callback-submit-button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CallbackForm;
