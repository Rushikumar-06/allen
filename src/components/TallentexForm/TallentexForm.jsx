import React, { useState } from 'react';
import './TallentexForm.css';

const TallentexForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    parentName: '',
    mobile: '',
    class: '',
    goal: '',
    state: '',
    examDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateSelect = (date) => {
    setFormData((prev) => ({ ...prev, examDate: date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="tallentex-form" onSubmit={handleSubmit}>
      <div className="tallentex-top-badge">LIMITED TIME OFFER</div>
      <h3>Register for <strong>TALLENTEX</strong> Online at ₹150</h3>

      <label>
        Student’s Full Name<span>*</span>
        <input type="text" name="fullName" placeholder="Ex: Rohit Singh" required onChange={handleChange} />
      </label>

      <label>
        Parent’s Name<span>*</span>
        <input type="text" name="parentName" placeholder="Ex: Mohit Singh" required onChange={handleChange} />
      </label>

      <label>
        Mobile Number<span>*</span>
        <input type="tel" name="mobile" placeholder="Ex: 9876543210" required onChange={handleChange} />
      </label>

      <label>
        Present Class<span>*</span>
        <select name="class"  required onChange={handleChange}>
          <option value="">Choose your Class</option>
          <option value="5">Class 5</option>
          <option value="6">Class 6</option>
          <option value="7">Class 7</option>
          <option value="8">Class 8</option>v
          <option value="9">Class 9</option>
          <option value="10">Class 10</option>
        </select>
      </label>

      <label>
        Career Goal<span>*</span>
        <select name="goal" required onChange={handleChange}>
          <option value="">Choose your goal</option>
          <option value="Engineering">Engineering</option>
          <option value="Medical">Medical</option>
          <option value="Olympiads">Olympiads</option>
          <option value="Boards">Boards</option>
        </select>
      </label>

      <label>
        State<span>*</span>
        <input type="text" name="state" placeholder="Ex: Rajasthan" required onChange={handleChange} />
      </label>

      <label>
        Select Exam Date (01:00 PM - 3:00 PM)<span>*</span>
        <div className="tallentex-exam-dates">
          <button
            type="button"
            className={formData.examDate === '5th Oct' ? 'tallentex-selected' : 'tallentext-unselected'}
            onClick={() => handleDateSelect('5th Oct')}
          >
            5th Oct
          </button>
          <button
            type="button"
            className={formData.examDate === '12th Oct' ? 'tallentex-selected' : 'tallentext-unselected'}
            onClick={() => handleDateSelect('12th Oct')}
          >
            12th Oct
          </button>
        </div>
      </label>

      <button type="submit" className="tallentex-submit-btn" disabled={!formData.examDate}>
        Register Now
      </button>

      <p className="tallentex-terms-text">
        By registering you accept our <a href="#">Terms & Conditions</a>
      </p>
    </form>
  );
};

export default TallentexForm;
