import React, { useState } from 'react';
import './styles/MyClubs.css';
import { Link } from 'react-router-dom';
import { GrFormPrevious } from "react-icons/gr";
import { GrPersonalComputer } from "react-icons/gr";
import { GiCampCookingPot } from "react-icons/gi";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";

const MyClubsCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const clubs = [
        {
            icon: <GrPersonalComputer className='a' />,
            name: 'Tech Innovators Society',
            date: '01/01/2023',
            status: 'Active'
        },
        {
            icon: <GiCampCookingPot className='a' />,
            name: 'Culinary Arts Club',
            date: '01/05/2022',
            status: 'Active'
        },
        {
            icon: <GrPersonalComputer className='a' />,
            name: 'Photography Club',
            date: '12/12/2022',
            status: 'Active'
        },
        {
            icon: <GiCampCookingPot className='a' />,
            name: 'Adventure Club',
            date: '15/03/2021',
            status: 'Active'
        },
        {
            icon: <GiCampCookingPot className='a' />,
            name: 'Adventure Club',
            date: '15/03/2021',
            status: 'Active'
        }
    ];

    // Move to the next set of clubs
    const handleNext = () => {
        if (currentIndex < clubs.length - 2) {
            setCurrentIndex(currentIndex + 2);
        }
    };

    // Move to the previous set of clubs
    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 2);
        }
    };

    const visibleClubs = clubs.slice(currentIndex, currentIndex + 2);

    return (
        <div className="card" style={{ backgroundColor: '#ECF0F1', borderRadius: '25px' }}>
            <h2 style={{ marginTop: '-7px' }}>My Clubs</h2>
            <div className="club-card-container">
                {currentIndex > 0 && (
                    <div className="prev-button-container">
                        <button className="prev-button" onClick={handlePrevious}>
                        <GrFormPrevious  className='c'/>
                        </button>
                    </div>
                )}
                {visibleClubs.map((club, index) => (
                    <div className="club-card" key={index}>
                        {club.icon}
                        <div className="club-info">
                            <h3>{club.name}</h3>
                            <p>Membership Date: {club.date}</p>
                            <p>Status: {club.status}</p>
                            <button>
                                <Link to='/ClubDetail' style={{ color: '#fff' }}>Details</Link>
                            </button>
                        </div>
                    </div>
                ))}
                {currentIndex < clubs.length - 2 && (
                    <div className="next-button-container">
                        <button className="next-button" onClick={handleNext}>
                        <MdNavigateNext className='c'/>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyClubsCard;
