import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './full.css'; // Assuming you're adding custom styles here

const RequestDetails = ({ data }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [infoText, setInfoText] = useState('');

  const handleStatusUpdate = (status) => {
    // Add logic to update the request status here
    console.log(`Request status updated to: ${status}`);
  };

  const handleRequestMoreInfo = () => {
    setShowDialog(true);
  };

  const handleDeleteRequest = () => {
    // Add logic to delete the request here
    console.log('Request deleted');
  };

  const handleDialogSubmit = () => {
    // Logic for sending additional info
    console.log('Information submitted:', infoText);
    setShowDialog(false);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
  };

  return (
    <div className="document-container">
      <h1>Request ID: {data.requestID}</h1>

      <div className="status-date">
        <span className={`status ${data.status.toLowerCase()}`}>{data.status}</span>
        <span className="date">Requested on: {data.dateOfRequest}</span>
      </div>

      <section className="document-section">
        <h2>Club Information</h2>
        <p><strong>Club Name:</strong> {data.clubName}</p>
        <p><strong>Affiliated Club:</strong> {data.memberInfo.affiliatedClub}</p>
      </section>

      <section className="document-section">
        <h2>Member Information</h2>
        <p><strong>Name:</strong> {data.memberInfo.fullName}</p>
        <p><strong>Member ID:</strong> {data.memberInfo.memberID}</p>
        <p><strong>Status:</strong> {data.memberInfo.membershipStatus}</p>
        <p><strong>Member Since:</strong> {data.memberInfo.memberSince}</p>
        <p><strong>Email:</strong> {data.memberInfo.contactInfo.email}</p>
        <p><strong>Phone:</strong> {data.memberInfo.contactInfo.phone}</p>
      </section>

      <section className="document-section">
        <h2>Event Information</h2>
        <p><strong>Event Name:</strong> {data.eventInfo.eventName}</p>
        <p><strong>Parent Club:</strong> {data.eventInfo.parentClub}</p>
        <p><strong>Affiliated Club:</strong> {data.eventInfo.affiliatedClub}</p>
        <p><strong>Event Date:</strong> {data.eventInfo.eventDate}</p>
        <p><strong>Venue:</strong> {data.eventInfo.eventVenue}</p>
      </section>

      <section className="document-section">
        <h2>Admin Actions</h2>
        <button className="document-action-button" onClick={() => handleStatusUpdate('Approved')}>Approve</button>
        <button className="document-action-button" onClick={() => handleStatusUpdate('Rejected')}>Reject</button>
        <button className="document-action-button" onClick={handleRequestMoreInfo}>Request More Info</button>
        <button className="document-action-button" onClick={handleDeleteRequest}>Delete Request</button>
      </section>

      <section className="document-section">
        <h2>Activity Log</h2>
        <ul>
          {data.activityLog.map((log, index) => (
            <li key={index}>
              <strong>{log.action}</strong> - {log.date}
            </li>
          ))}
        </ul>
      </section>

      <button className="document-action-button">
        <Link to='/RequestsPage' style={{color: 'white'}}>Go back</Link>
      </button>

      {/* Dialog Box for Requesting More Info */}
      {showDialog && (
        <div className="document-dialog-overlay">
          <div className="document-dialog-box">
            <h2>Request More Information</h2>
            <p><strong>Member ID:</strong> {data.memberInfo.memberID}</p>
            <textarea
              placeholder="Enter your message here"
              value={infoText}
              onChange={(e) => setInfoText(e.target.value)}
            />
            <div className="document-dialog-buttons">
              <button className="document-action-button" onClick={handleDialogSubmit}>Send</button>
              <button className="document-action-button" onClick={handleDialogClose}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestDetails;
