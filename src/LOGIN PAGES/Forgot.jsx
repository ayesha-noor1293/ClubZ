import React from 'react';
import './LoginPages.css';
import { Link } from 'react-router-dom';
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { IoIosLock } from "react-icons/io";

const Forgot = () => {

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    alert('An email has been sent to you with instructions to reset your password.');
    // You can add more logic here like calling an API to send the email
  };

  return (
    <div className='fullBody'>
      <div className="forgot-password-container">
        <div className="FP-icon-container">
          <MdOutlineReportGmailerrorred className="FP-error-icon" />
        </div>
        <h2>Forgot Password</h2>
        <p>Enter your Email Address and we will send an email to reset your password.</p>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your email" required /><IoIosLock className='icon' />
          <button type="submit">Submit</button>
          <div><Link to="/LoginPage" className='FP-back'>Go back</Link></div>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
