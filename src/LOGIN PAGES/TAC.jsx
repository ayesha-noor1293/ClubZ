import React from 'react';
import './LoginPages.css';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div className='fullBody'>
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <p>Welcome to Our Service!</p>

      <p>
        By accessing or using our service, you agree to be bound by these terms and conditions.
        If you do not agree with any part of the terms, you may not use our service.
      </p>

      <h2>1. Use of the Service</h2>
      <p>
        You agree to use our service only for lawful purposes and in a way that does not infringe
        the rights of, restrict, or inhibit anyone else's use and enjoyment of the service.
      </p>

      <h2>2. Privacy Policy</h2>
      <p>
        Your privacy is important to us. Please read our <a href="somepage">Privacy Policy</a> for details
        on how we collect, use, and protect your information.
      </p>

      <h2>3. Modifications</h2>
      <p>
        We reserve the right to modify these terms at any time. Any changes will be effective
        immediately upon posting. Your continued use of the service after changes have been posted
        will constitute your acceptance of the new terms.
      </p>

      <h2>4. Contact Us</h2>
      <p>
        If you have any questions about these terms, please contact us at <a href="mailto:support@yourdomain.com">support@yourdomain.com</a>.
      </p>

      <p>
        By using our service, you acknowledge that you have read and understood these terms and agree
        to be bound by them.
      </p>

      <button className='T-btn' type='submit'><Link to="/Register"  ><p className='B'>Go back</p></Link></button>

      
    </div></div>
  );
};

export default TermsAndConditions;
