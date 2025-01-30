import React, { useState } from 'react';
import './App.css';  // Import the CSS file

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    gender: '',
    subject: '',
    comments: '',
    agree: false
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    gender: '',
    subject: '',
    comments: '',
    agree: ''
  });

  // Handle change in form fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Validation function
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // First Name validation
    if (!formData.firstName) {
      formErrors.firstName = 'First Name is required';
      isValid = false;
    }

    // Last Name validation
    if (!formData.lastName) {
      formErrors.lastName = 'Last Name is required';
      isValid = false;
    }

    // Email validation
    if (!formData.email) {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
      isValid = false;
    }

    // Contact validation (Phone number)
    if (!formData.contact) {
      formErrors.contact = 'Contact number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.contact)) {
      formErrors.contact = 'Contact number must be 10 digits';
      isValid = false;
    }

    // Gender validation
    if (!formData.gender) {
      formErrors.gender = 'Gender is required';
      isValid = false;
    }

    // Subject validation
    if (!formData.subject) {
      formErrors.subject = 'Subject is required';
      isValid = false;
    }

    // Comments validation (Optional)
    if (formData.comments.length > 200) {
      formErrors.comments = 'Comments should be less than 200 characters';
      isValid = false;
    }

    // Agree validation
    if (!formData.agree) {
      formErrors.agree = 'You must agree to the terms and conditions';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully');
      // Handle form submission logic here
    }
  };

  // Handle reset
  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      contact: '',
      gender: '',
      subject: '',
      comments: '',
      agree: false
    });
    setErrors({});
  };

  return (
    <div className="form-container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>

        <div className="input-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>

        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="input-group">
          <label>Contact:</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
          {errors.contact && <span className="error">{errors.contact}</span>}
        </div>

        <div className="input-group">
          <label>Gender:</label>
          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              checked={formData.gender === 'male'}
            /> Male
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
              checked={formData.gender === 'female'}
            /> Female
            <input
              type="radio"
              name="gender"
              value="other"
              onChange={handleChange}
              checked={formData.gender === 'other'}
            /> Other
          </div>
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>

        <div className="input-group">
          <label>Subject:</label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          >
            <option value="">Select Subject</option>
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="english">English</option>
            <option value="history">History</option>
          </select>
          {errors.subject && <span className="error">{errors.subject}</span>}
        </div>

        <div className="input-group">
          <label>Comments:</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            maxLength="200"
          />
          {errors.comments && <span className="error">{errors.comments}</span>}
        </div>

        <div className="input-group">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          <label>I agree to the terms and conditions</label>
          {errors.agree && <span className="error">{errors.agree}</span>}
        </div>

        <div className="button-group">
          <button type="reset" onClick={handleReset} className="reset-btn">
            Reset
          </button>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;

