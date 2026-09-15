import React from 'react'
import pp from './img/pp.png'
import './styles/contentstyle.css'
 const ProfileAdmin = () => {
  return (
          
    <div className="admin-profile" style={{width:'258px',height:'135px'}}>
      <h2 className='top-stats'>My Profile</h2>
    <div className='admin-detail'>
          <img src={pp} alt="Profile" /><div className='admin-details'>
          <h3>Muhammad Ali</h3>
          <p><strong className='tp'>Role: </strong>Admin</p>
          <p><strong className='tp'>ID:</strong> ABC12345</p>
          <p><strong className='tp'>Club:</strong>Tech Innovative</p> 
          </div></div>
      </div>
  )
}
export default ProfileAdmin;