// src/components/UpcomingEventsCard.js
import React from 'react';
import './styles/Events.css';
import { MdNavigateNext } from "react-icons/md";
import pic from './img/culinery.png';
import { Link } from 'react-router-dom';
const Events = () => {
    return (
        <div className="card-event">
            <h2>Upcoming Events</h2><div className='scroll'> 
            <div className="event-card">
                <img src={pic} alt="Event Logo" />
                <div className="event-info">
                    <h3>Cooking Mania</h3>
                    <p style={{fontSize:'14px'}}>Cluliney Arts Club</p>
                    <p><strong>Date:</strong> 24/09/24</p>
                    <p><strong>Affiliated:</strong> Yes</p>
                    <p><strong>Status:</strong> Registered</p>
                    
                </div>
                <Link to='/EventOverview'><MdNavigateNext className='abc'/></Link>
            </div>
            <div className="event-card">
                <img src={pic} alt="Event Logo" />
                <div className="event-info">
                    <h3>Cooking Mania</h3>
                    <p style={{fontSize:'14px'}}>Cluliney Arts Club</p>
                    <p><strong>Date:</strong> 24/09/24</p>
                    <p><strong>Affiliated:</strong> Yes</p>
                    <p><strong>Status:</strong> Not Registered</p>
                    
                </div>
                <Link to='/EventOverview'><MdNavigateNext className='abc'/></Link>
            </div>
            <div className="event-card">
                <img src={pic} alt="Event Logo" />
                <div className="event-info">
                    <h3>Cooking Mania</h3>
                    
                    <p style={{fontSize:'14px'}}>Cluliney Arts Club</p>
                    <p><strong>Date:</strong> 24/09/24</p>
                    <p><strong>Affiliated:</strong> Yes</p>
                    <p><strong>Status:</strong> Pending</p>
                    
                </div>
                <Link to='/EventOverview'><MdNavigateNext className='abc'/></Link>
            </div>
            </div>
            {/* Add more event cards as needed */}
        </div>
    );
};

export default Events;
