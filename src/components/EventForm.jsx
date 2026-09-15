import React, { useState } from 'react';
import './styles/Form.css';
import { useNavigate } from 'react-router-dom';

const EventForm = () => {
    const navigate = useNavigate();
      
    const goBack = () => {
      navigate(-1);  // This navigates to the previous page in history
    
    };

    
    const [formData, setFormData] = useState({

      
        
        eventName: '',
        eventDate: '',
        parentClub: '',
        affiliatedClub: '',
        fullName: '',
        memberID: '',
        primaryClub: '',
        purposeOfVisit: '',
        dateOfVisit: '',
        attachment: '',
        additionalNotes: '',
    });

    const events = [
        { name: 'Tech Conference', date: '2024-10-15', parentClub: 'Tech Innovators Society', affiliatedClub: 'Developers Club' },
        { name: 'Culinary Workshop', date: '2024-11-05', parentClub: 'Culinary Arts Club', affiliatedClub: 'Chef Masters' },
        { name: 'Photography Exhibition', date: '2024-09-25', parentClub: 'Photography Club', affiliatedClub: 'Art Lovers' },
    ];

    const handleEventChange = (e) => {
        const selectedEvent = events.find(event => event.name === e.target.value);
        if (selectedEvent) {
            setFormData({
                ...formData,
                eventName: selectedEvent.name,
                eventDate: selectedEvent.date,
                parentClub: selectedEvent.parentClub,
                affiliatedClub: selectedEvent.affiliatedClub,
            });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process form submission (e.g., send to server or show data in console)
        alert('Your request has been sent');
        

        setFormData({
            eventName: '',
            eventDate: '',
            parentClub: '',
            affiliatedClub: '',
            fullName: '',
            memberID: '',
            primaryClub: '',
            purposeOfVisit: '',
            dateOfVisit: '',
            attachment: '',
            additionalNotes: '',
        });
        console.log(formData);
    };

    const handleCancel = () => {
        // Reset form or close it
        if (window.confirm('Are you sure you want to cancel?')) {
        setFormData({
            eventName: '',
            eventDate: '',
            parentClub: '',
            affiliatedClub: '',
            fullName: '',
            memberID: '',
            primaryClub: '',
            purposeOfVisit: '',
            dateOfVisit: '',
            attachment: '',
            additionalNotes: '',
        });
    }
    };

    return (
        <form className="event-form" onSubmit={handleSubmit}>
            <h2>Event Information</h2>
            <label>Event Name:</label>
            <select name="eventName" value={formData.eventName} onChange={handleEventChange} required>
                <option value="" disabled>Select an event</option>
                {events.map((event, index) => (
                    <option key={index} value={event.name}>{event.name}</option>
                ))}
            </select>

            <label>Event Date:</label>
            <input type="text" name="eventDate" value={formData.eventDate} readOnly />

            <label>Parent Club:</label>
            <input type="text" name="parentClub" value={formData.parentClub} readOnly />

            <label>Affiliated Club:</label>
            <input type="text" name="affiliatedClub" value={formData.affiliatedClub} readOnly />

            <h2>Member Information</h2>
            <label>Full Name:</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Enter your full name" required />

            <label>Member ID:</label>
            <input type="text" name="memberID" value={formData.memberID} onChange={handleInputChange} placeholder="ID123456" required />

            <label>Primary Club:</label>
            <input type="text" name="primaryClub" value={formData.primaryClub} onChange={handleInputChange} placeholder="Enter your primary club" required />

            <h2>Visit Details</h2>
            <label>Purpose of Visit:</label>
            <textarea name="purposeOfVisit" value={formData.purposeOfVisit} onChange={handleInputChange} placeholder="Briefly explain the reason for attending the event" required></textarea>

            <label>Date of Visit:</label>
            <input type="date" name="dateOfVisit" value={formData.dateOfVisit} onChange={handleInputChange} placeholder="Select the date of your visit" />

            <h2>Attachments (Optional)</h2>
            <label>Attachment:</label>
            <input type="file" name="attachment" accept=".pdf, .jpg, .png" onChange={(e) => setFormData({ ...formData, attachment: e.target.files[0] })} />

            <h2>Additional Notes (Optional)</h2>
            <label>Additional Notes:</label>
            <textarea name="additionalNotes" value={formData.additionalNotes} onChange={handleInputChange} placeholder="Any special requests or additional information"></textarea>

            <div className="F-action-buttons">
                <button type="submit">Submit Request</button>
                <button type="button" onClick={handleCancel} style={{marginLeft:'-280px'}}>Cancel</button>
                <button onClick={goBack} >Go Back</button>
            </div>
        </form>
    );
};

export default EventForm;
