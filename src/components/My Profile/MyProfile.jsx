import React, { useState } from 'react';
import pic from './img/pp.png';
import { FaUserEdit } from "react-icons/fa";

const MyProfile = () => {
    // State for managing dialog visibility and form data
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: 'Muhammad Ali',
        address: '123 Maple Street, Springfield, IL, Pakistan',
        phone: '+1234567890',
        email: 'ali@example.com',
    });

    // Handler to open the dialog
    const handleEditClick = () => {
        setIsDialogOpen(true);
    };

    // Handler to close the dialog
    const handleCancelClick = () => {
        setIsDialogOpen(false);
    };

    // Handler to update form data
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handler to save changes
    const handleSaveChanges = () => {
        // Assuming changes are saved
        setIsDialogOpen(false);
    };

    return (
        <div className='whole-container'>
            <div className="profile-container">
                {/* Profile Overview Card */}
                <div className="card profile-overview">
                    {/* Hide edit button when dialog is open */}
                    {!isDialogOpen  &&(
                        <button className='btn-edit' onClick={handleEditClick}>
                            <FaUserEdit style={{ fontSize: '20px', verticalAlign: 'middle' }} />
                        </button>
                    )}
                    <img src={pic} alt="Profile" className="profile-picture" />
                    <h2>{formData.name}</h2>
                    <p><strong>Member ID:</strong> 98765</p>
                    <p><strong>Member Since:</strong> March 15, 2020</p>
                    <p><strong>Membership Status: </strong><span className="status-active">Active</span></p>
                </div>

                {/* Contact Information Card */}
                <div className="profile-card contact-info">
                    <h3>Contact Information</h3>
                    <p><strong>Email Address:</strong> {formData.email}</p>
                    <p><strong>Phone Number: </strong>{formData.phone}</p>
                    <p><strong>Address:</strong> {formData.address}</p>
                </div>

                {/* Club Affiliations Card */}
                <div className="profile-card club-affiliations">
                    <h3>My Clubs</h3>
                    <ul>
                        <li>Book Lovers Club</li>
                        <li>Adventure Enthusiasts Club</li>
                        <li>Art & Culture Society</li>
                    </ul>
                </div>

                {/* Membership Details Card */}
                <div className="profile-card membership-details">
                    <h3>Membership Details</h3>
                    <div className='row'>
                        <div className='membercard'>
                            <h4>Fitness & Wellness Club</h4>
                            <p>Membership Type: Premium Member</p>
                            <p>Joined On: January 10, 2022</p>
                            <p>Membership Expiry: December 31, 2024</p>
                            <p>Renewal Status: Active (Next Renewal in December 2024)</p>
                        </div>

                        <div className='membercard'>
                            <h4>Fitness & Wellness Club</h4>
                            <p>Membership Type: Premium Member</p>
                            <p>Joined On: January 10, 2022</p>
                            <p>Membership Expiry: December 31, 2024</p>
                            <p>Renewal Status: Active (Next Renewal in December 2024)</p>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
            </div>

            {/* Dialog Box */}
            {isDialogOpen && (
                <div className="pp-dialog-overlay">
                    <div className="pp-dialog-box">
                        <h3 style={{ textAlign: 'center' }}>Edit Profile Information</h3>
                        <form>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </label>
                            <br />
                            <label>
                                Address:
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </label>
                            <br />
                            <label>
                                Phone Number:
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </label>
                            <br />
                            <label>
                                Email Address:
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </label>
                            <br />
                            <div className="pp-dialog-actions">
                                <button type="button" onClick={handleSaveChanges} className='change'>
                                    Change
                                </button>
                                <button type="button" onClick={handleCancelClick} className='cancel'>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyProfile;
