// src/components/MyProfileCard.js
import React from 'react';
import './styles/MyProfile.css'
import pp from './img/pp.png'
const MyProfile = () => {
    return (
        
        <div className="card-profile" style={{width:'280px'}}>
      
      <div className='user--detail'>
            <img src={pp} alt="Profile" /><div className='details'>
            <h2>Muhammad Ali</h2>
            <p>MemberID: ABC12345</p></div></div>
        </div>
    );
};

export default MyProfile;
