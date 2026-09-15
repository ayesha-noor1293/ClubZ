
    import React, { useState } from 'react';
    import pic from './HandS/img/pp.png';
    import { FaUserEdit } from "react-icons/fa";
    import { IoIosSend } from "react-icons/io";
    import { Link } from 'react-router-dom';

    
 const ProfileContent = () => {
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
                        <p><strong className='tp'>Role:</strong> <span className="status-active">Admin</span></p>

                        <p><strong className='tp'> ID:</strong> 98765</p>
                        <p><strong className='tp'>Admin Since:</strong> March 15, 2020</p>
                    </div>
    
                    {/* Contact Information Card */}
                    <div className="profile-card contact-info">
                        <h3>Contact Information</h3>
                        <p><strong className='tp'>Email Address:</strong> {formData.email}</p>
                        <p><strong className='tp'>Phone Number: </strong>{formData.phone}</p>
                        <p><strong className='tp'>Address:</strong> {formData.address}</p>
                    </div>
    
                    {/* Club Affiliations Card */}
                    <div className="profile-card club-affiliations">
                        <h3>My Clubs</h3>
                        <ul>
                            <li >Tech Innovative Club<Link to='/ClubDetail'><IoIosSend className='btn-admin'/></Link>
                            </li>
                            
                        </ul>
                    </div>
    
                    {/* Membership Details Card */}
                    <div className="profile-card membership-details">
                        <h3>Permissions and Access Control
                        </h3>
                        <div className='admin-pp'>
                        <ul >
                        <li>Ability to approve/reject introduction letters.

</li>
                        <li>Ability to manage member lists.
                        </li>
                        <li>Ability to manage club settings.</li>
                    </ul>
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
    
    
    
export default ProfileContent;