// src/ViewPage.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './styles/ViewPage.css'; // Import the CSS file



// Data with ids
const letter = [
  {
    id: 'A23',
    title: 'Annual Golf Tournament',
    ParentClub: 'Elite Sports Club',
    AffClub: 'Golf Enthusiasts Club',
    Date: 'August 20, 2024',
    Status: 'Approved',
    MemberName: 'John Doe',
    MemberID: '12345',
    RequestDate: 'August 15, 2024',
    ApprovalDate: 'August 22, 2024',
    Content: 'This letter serves as an introduction for John Doe to attend the Annual Golf Tournament at Elite Sports Club.',
    Purpose: 'Access to the Annual Golf Tournament.',
    ValidUntil: 'September 30, 2024',
    AdminNotes: 'Approved for entry to the golf tournament. Please present this letter at the entrance.',
  },
  {
    id: 'C45',
    title: 'Chefs Masterclass',
    ParentClub: 'Culinary Arts Club',
    AffClub: 'Cuisine Club',
    Date: 'August 28, 2024',
    Status: 'Pending',
    MemberName: 'Jane Doe',
    MemberID: '67890',
    RequestDate: 'August 10, 2024',
    ApprovalDate: '',
    Content: 'This letter serves as an introduction for Jane Doe to attend the Chefs Masterclass at Culinary Arts Club.',
    Purpose: 'Access to the Chefs Masterclass.',
    ValidUntil: 'September 28, 2024',
    AdminNotes: 'Pending approval for entry to the masterclass.',
  },
  {
    id: 'T78',
    title: 'Python Coding Class',
    ParentClub: 'Tech Innovators Society',
    AffClub: 'Coding Club',
    Date: 'August 18, 2024',
    Status: 'Rejected',
    MemberName: 'Alice Johnson',
    MemberID: '54321',
    RequestDate: 'August 1, 2024',
    ApprovalDate: 'August 3, 2024',
    Content: 'This letter serves as an introduction for Alice Johnson to attend the Python Coding Class at Tech Innovators Society.',
    Purpose: 'Access to the Python Coding Class.',
    ValidUntil: 'September 18, 2024',
    AdminNotes: 'Rejected. Please contact the admin for more information.',
  },
];

function ViewPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = letter.find(item => item.id === id);

  const handleBack = () => {
    navigate('/');
  };

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="view-page">
      <div className="letter-container">
        <h1>Introduction Letter Request Details</h1>
        <div className="section">
          <h2>Event Details</h2>
          <p><strong>Club Name:</strong> {item.ParentClub}</p>
          <p><strong>Event Name:</strong> {item.title}</p>
        </div>
        <div className="section">
          <h2>Member Information</h2>
          <p><strong>Member Name:</strong> {item.MemberName}</p>
          <p><strong>Member ID:</strong> {item.MemberID}</p>
        </div>
        <div className="section">
          <h2>Request Details</h2>
          <p><strong>Request Date:</strong> {item.RequestDate}</p>
          <p><strong>Status:</strong> {item.Status}</p>
          <p><strong>Approval Date:</strong> {item.ApprovalDate}</p>
        </div>
        <div className="section">
          <h2>Introduction Letter Details</h2>
          <p><strong>Content:</strong> "{item.Content}"</p>
          <p><strong>Purpose:</strong> {item.Purpose}</p>
          <p><strong>Valid Until:</strong> {item.ValidUntil}</p>
        </div>
        <div className="section">
          <h2>Admin Notes</h2>
          <p>{item.AdminNotes}</p>
        </div>
        <div className="section">
          <h2>Attachments</h2>
          <a href="#somepge" className="attachment-link">Download Letter</a> | <a href="#somepge" className="attachment-link">Print Letter</a>
        </div>
        <div className="section">
          <h2>Actions</h2>
          {item.Status === 'Rejected' && (
            <a href="#somepge" className="action-link">Request New Letter</a>
          )}
          <a href="#somepge" className="action-link">Contact Admin</a>
        </div>
        <button onClick={handleBack} className="back-button">Back to Table</button>
      </div>
    </div>
  );
}

export default ViewPage;
