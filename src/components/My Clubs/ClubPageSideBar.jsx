import React from 'react'
import pic from './img/ClubZ.png';
import { IoHomeOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { LuClub } from "react-icons/lu";
import { Link } from 'react-router-dom';

  const ClubPageSideBar = () => {
  return (
 <div className='menu'>
    <div className='logo'>
        <img src={pic} alt="logo" className='logo'/>
        
        </div>
 
 <div className='menu--list'>
  <Link to='/'className='item'><IoHomeOutline className='icon' /> Dashboard</Link>
  <Link to='/MyClub' className='item active'><LuClub className='icon'/> My Clubs</Link>
 <Link to='/IntroLetterpage' className='item'><IoDocumentTextOutline className='icon'/> Introduction Letter</Link>
 <Link to='/ProfileDashboard' className='item '><IoPersonOutline className='icon'/> My Profile</Link>
  </div></div>
  )
}
export default ClubPageSideBar;

