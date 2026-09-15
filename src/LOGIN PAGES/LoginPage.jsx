

import React from 'react';
import { Link } from 'react-router-dom';

import './LoginPages.css';
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";


function LoginPage() {
  return (
    <div className='fullBody'>
    <div className='LP-wrapper'>
        <form action="">
      <h1>Login</h1>
      <div className='LP-input-box'><FaUser className='icon' /><input type='text' placeholder='Username' required/></div>

      <div className='LP-input-box'><input type='password' placeholder='Password' required/> <IoIosLock  className='icon'/></div>


      <div className='LP-remember-forgot'><label><input type='checkbox' /> Remember Me</label>
      <Link to="/Forgot" className='B' >Forgot Password?</Link></div>

<button className='LP-btn' type='submit'><Link to="/" style={{color:'#fff'}}>Login</Link></button>
<div className='LP-register-link'><Link to="/register" className='.A'>Create Account</Link></div>

      </form></div></div>
  );
}

export default LoginPage;
