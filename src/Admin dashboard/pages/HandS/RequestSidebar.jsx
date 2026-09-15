import React from 'react'
import pic from './img/ClubZ.png';
import './headerandside.css'
import { IoHomeOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlinePendingActions } from "react-icons/md";
import { Link } from 'react-router-dom';


  const RequestSideBar = () => {
  return (
 <div className='Admin-menu'>
    <div className='logo'>
        <img src={pic} alt="logo" className='logo'/>
        
        </div>
 
 <div className='AD-menu--list'>
  <Link to='/Admin'className='AD-item '><IoHomeOutline className='icon' /> Dashboard</Link>
 <Link to='/RequestsPage' className='AD-item active'><MdOutlinePendingActions  className='icon'/> Requests List</Link>
 <Link to='/MembersPage' className='AD-item'><IoDocumentTextOutline className='icon'/> Members Data</Link>
 <Link to='/AdminProfilePage' className='AD-item'><IoPersonOutline className='icon'/> My Profile</Link>
  </div></div>
  )
}
export default RequestSideBar;

