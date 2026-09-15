

import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPages.css';
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

function Register() {
  return (
    <div className='fullBody'>

    <div className='R-wrapper'>
        <form action="">
      <h1>Register</h1>
      <div className='R-input-box'><FaUser className='icon' /><input type='text' placeholder='Username' required/></div>

      <div className='R-input-box'><IoIosMail  className='icon' /><input type='text' placeholder='Email' required/></div>

      <div className='R-input-box'><input type='password' placeholder='Password' required/> <IoIosLock  className='icon'/></div>

      <div className='R-input-box'><input type='password' placeholder='ConfirmPassword' required/> <IoIosLock  className='icon'/></div>

      <div className='R-remember-forgot'><label><input type='checkbox' /> I agree to the <Link to="/TAC">Terms & Conditions</Link></label>
      </div>


    <button className='R-btn' type='submit' ><Link to="/" style={{color:'#fff'}}>Register</Link></button>
<div className='R-register-link'> <Link to="/loginPage" className='.A'>Login here</Link></div>

      </form></div></div>
  );
}

export default Register;
