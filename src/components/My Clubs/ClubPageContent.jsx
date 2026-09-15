
  
import React from 'react';
import './ClubPage.css'
import { GrPersonalComputer } from "react-icons/gr";
import { GiCampCookingPot } from "react-icons/gi";
import { Link } from 'react-router-dom';

const ClubPageContent = () => {
    return (
        
        <div className="CD-card" style={{backgroundColor:'#ECF0F1', borderRadius:'25px',height:'480px'}}>
            <h2 style={{marginTop:'-7px'}}>My Clubs</h2>
            <div className="CD-club-card-container">
                <div className="CD-club-card">
                <GrPersonalComputer  className='a'/>
                    <div className="CD-club-info">
                    <h3>Tech Innovators Society</h3>
                    <p>Membership Date: 01/01/2023</p>
                    <p>Status: Active</p>

                    <button><Link to='/ClubDetail' style={{color:'#fff'}}>Details</Link></button>                    </div>
                </div>
                <div className="CD-club-card">
                <GiCampCookingPot className='a' />
                    <div className="CD-club-info">
                    <h3>Culinary Arts Club</h3>
                    <p>Membership Date: 01/05/2022</p>
                    <p>Status: Active</p>
                    

                    <button><Link to='/ClubDetail' style={{color:'#fff'}}>Details</Link></button>                    </div>
                </div>

                <div className="CD-club-card">
                <GiCampCookingPot className='a' />
                    <div className="CD-club-info">
                    <h3>Culinary Arts Club</h3>
                    <p>Membership Date: 01/05/2022</p>
                    <p>Status: Active</p>
                    

                    <button><Link to='/ClubDetail' style={{color:'#fff'}}>Details</Link></button>                    </div>
                </div>
                <div className="CD-club-card">
                <GiCampCookingPot className='a' />
                    <div className="CD-club-info">
                    <h3>Culinary Arts Club</h3>
                    <p>Membership Date: 01/05/2022</p>
                    <p>Status: Active</p>
                    

                    <button><Link to='/ClubDetail' style={{color:'#fff'}}>Details</Link></button>                    </div>
                </div>
                {/* Add more club cards as needed */}
            </div>
        </div>
    );
};


export default ClubPageContent;
