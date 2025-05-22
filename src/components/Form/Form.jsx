import React, { useState } from 'react';

import './Form.css';
const CallbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    class: '6th',
    goal: 'Neet',
    course: '',
    state: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="container">
      <div className="image-section">
        <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1730878962/oqfy1klihlgn0vmpy77w.webp?_upload_ref=ic_img_tool" alt="" />
      </div>
      <div className="form-section">
        <h2>Request a callback</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Student's full name<span>*</span></label>
              <input type="text" name="name" placeholder="Ex: Rohit Singh" required value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Mobile Number<span>*</span></label>
              <input type="tel" name="mobile" placeholder="Ex: +919876543210" required value={formData.mobile} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Class<span>*</span></label>
              <select name="class" required value={formData.class} onChange={handleChange}>
                
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
            <div className="form-group">
              <label>Goals<span>*</span></label>
              <select name="goal" required value={formData.goal} onChange={handleChange}>
                <option value="NEET">NEET</option>
                <option value="JEE ADVANCED">JEE ADVANCED</option>
                <option value="PNCF (Olympiads/Boards and Others)">PNCF (Olympiads/Boards and Others)</option>
                <option value="CUET">CUET</option>
                <option value="JEE MAIN">JEE MAIN</option>
              </select>
            </div>
            <div className="form-group">
              <label>Preferred Courses<span>*</span></label>
              <select name="course" required value={formData.course} onChange={handleChange}>
                <option value="Online Courses">Online Courses</option>
                <option value="Classroom Courses">Classroom Courses</option>
                <option value="Online Test Series"> OnlineTest Series</option>
              </select>
            </div>
            <div className="form-group">
              <label>State<span>*</span></label>
              <input type="text"  name="state"required value={formData.state} onChange={handleChange} />
            </div>
          </div>
          <p className="terms">
            By continuing, you agree to our <a href="/terms">Terms & Conditions</a>
          </p>
          <button className='form-button' type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CallbackForm;
