import React from 'react'
import SidebarProfile from './My Profile/SidebarProfile';
import HeaderProfile from './HeaderProfile';
import './My Profile/ProfileDashboard.css';
import MyProfile from './My Profile/MyProfile';
 const ProfileDashboard = () => {
    return (
        <div className='dashboard'>
    <SidebarProfile />
    
    <div className='dashboard--Content'>
    <div className="head">
    <HeaderProfile />
        
    
        <div className="main-content" >
                       <MyProfile />
                       
                        
                    </div>
                    </div>
    </div>
        </div>
      );
}
export default ProfileDashboard;
