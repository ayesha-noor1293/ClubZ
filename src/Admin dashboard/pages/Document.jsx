import React, { useState } from 'react';
import './Document.css';
import { Link } from 'react-router-dom';
const Document = () => {
  const [data, setData] = useState({
    requestID: "REQ-12345",
    status: "Pending",
    dateOfRequest: "2024-09-12",
    clubName: "Corporate Networking Club",
    memberInfo: {
      fullName: "John Doe",
      memberID: "M-56789",
      membershipStatus: "Active",
      memberSince: "2021-01-05",
      contactInfo: {
        email: "john.doe@example.com",
        phone: "+123456789"
      },
      affiliatedClub: "Business Professionals Club"
    },
    eventInfo: {
      eventName: "Annual Corporate Networking Gala",
      parentClub: "Corporate Professionals Society",
      affiliatedClub: "Business Professionals Club",
      eventDate: "2024-09-20",
      eventVenue: "The Grand Hall, Downtown"
    },
    requestDetails: {
      purpose: "Attend the networking gala hosted by Corporate Professionals Society.",
      requestedBy: "John Doe",
      submittedOn: "2024-09-12",
      supportingDocs: null
    },
    activityLog: [
      { action: "Submitted by John Doe", date: "2024-09-12" },
      { action: "Viewed by Admin", date: "2024-09-14" }
    ]
  });
  
  const [showDialog, setShowDialog] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [infoText, setInfoText] = useState("");

  const handleStatusUpdate = (newStatus) => {
    setData({ ...data, status: newStatus });
  };

  const handleRequestMoreInfo = () => {
    setShowDialog(true);
  };

  const handleDeleteRequest = () => {
    if (deleteConfirm) {
      // Actual deletion logic here (e.g., removing from database)
      alert('Request Deleted');
    } else {
      const confirmDelete = window.confirm('Are you sure you want to delete this request?');
      setDeleteConfirm(confirmDelete);
    }
  };

  const handleDialogClose = () => {
    setShowDialog(false);
    setInfoText(""); // Reset text area after closing
  };

  const handleDialogSubmit = () => {
    // Logic to submit the request for more info
    alert(`Requesting more info with message: ${infoText}`);
    setShowDialog(false);
  };

  return (
    <div className="document-container">
      <h1>Request ID: {data.requestID}</h1>
      <div className="status-date">
        <span className={`status ${data.status.toLowerCase()}`}>{data.status}</span>
        <span className="date">Requested on: {data.dateOfRequest}</span>
      </div>

      <section className="section">
        <h2>Club Information</h2>
        <p><strong>Club Name:</strong> {data.clubName}</p>
        <p><strong>Affiliated Club:</strong> {data.memberInfo.affiliatedClub}</p>
      </section>

      <section className="section">
        <h2>Member Information</h2>
        <p><strong>Name:</strong> {data.memberInfo.fullName}</p>
        <p><strong>Member ID:</strong> {data.memberInfo.memberID}</p>
        <p><strong>Status:</strong> {data.memberInfo.membershipStatus}</p>
        <p><strong>Member Since:</strong> {data.memberInfo.memberSince}</p>
        <p><strong>Email:</strong> {data.memberInfo.contactInfo.email}</p>
        <p><strong>Phone:</strong> {data.memberInfo.contactInfo.phone}</p>
      </section>

      <section className="section">
        <h2>Event Information</h2>
        <p><strong>Event Name:</strong> {data.eventInfo.eventName}</p>
        <p><strong>Parent Club:</strong> {data.eventInfo.parentClub}</p>
        <p><strong>Affiliated Club:</strong> {data.eventInfo.affiliatedClub}</p>
        <p><strong>Event Date:</strong> {data.eventInfo.eventDate}</p>
        <p><strong>Venue:</strong> {data.eventInfo.eventVenue}</p>
      </section>

      <section className="section">
        <h2>Admin Actions</h2>
        <button className="action-button" onClick={() => handleStatusUpdate('Approved')}>Approve</button>
        <button className="action-button" onClick={() => handleStatusUpdate('Rejected')}>Reject</button>
        <button className="action-button" onClick={handleRequestMoreInfo}>Request More Info</button>
        <button className="action-button" onClick={handleDeleteRequest}>Delete Request</button>
      </section>

      <section className="section">
        <h2>Activity Log</h2>
        <ul>
          {data.activityLog.map((log, index) => (
            <li key={index}>
              <strong>{log.action}</strong> - {log.date}
            </li>
          ))}
        </ul>
      </section>
<button className="action-button"><Link to='RequestsPage' style={{color:'white'}}> Go back</Link></button>
      {/* Dialog Box for Requesting More Info */}
      {showDialog && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <h2>Request More Information</h2>
            <p><strong>Member ID:</strong> {data.memberInfo.memberID}</p>
            <textarea
              placeholder="Enter your message here"
              value={infoText}
              onChange={(e) => setInfoText(e.target.value)}
            />
            <div className="dialog-buttons">
              <button className="action-button" onClick={handleDialogSubmit}>Send</button>
              <button className="action-button" onClick={handleDialogClose}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Document;
