
import React, { useState } from 'react';
import './tables.css'; // Import the CSS file for styling
import { BiSearch } from 'react-icons/bi';

import { Link } from 'react-router-dom';
const RequestContent = () => {
  // Sample data for the table
  const initialData = [
    {
      eventName: 'Annual Gala',
      eventDate: '2024-10-15',
      memberName: 'John Doe',
      memberId: '1234',
      status: 'Pending',
      parentClub: 'Club A',
      affiliatedClub: 'Club B',
      requestDate: '2024-09-01',
      purposeOfVisit: 'Networking',
      attachments: 'file.pdf',
      additionalNotes: 'VIP Guest',
    },
    {
      eventName: 'Summer Camp',
      eventDate: '2024-08-20',
      memberName: 'Jane Smith',
      memberId: '5678',
      status: 'Approved',
      parentClub: 'Club X',
      affiliatedClub: 'Club Y',
      requestDate: '2024-07-25',
      purposeOfVisit: 'Leisure',
      attachments: 'none',
      additionalNotes: 'N/A',
    },
    {
      eventName: 'Annual Gala',
      eventDate: '2024-10-15',
      memberName: 'Asim Doe',
      memberId: '5842',
      status: 'Pending',
      parentClub: 'Club A',
      affiliatedClub: 'Club B',
      requestDate: '2024-09-01',
      purposeOfVisit: 'Participant',
      attachments: 'file.pdf',
      additionalNotes: 'None',
    },
    // Add more sample data as needed
  ];

  const [data, setData] = useState(initialData);
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Handle search and filtering
  const filteredData = data
    .filter((item) => {
      if (filterStatus === 'All') return true;
      return item.status === filterStatus;
    })
    .filter((item) => {
      const searchIn = `${item.eventName} ${item.memberName} ${item.parentClub} ${item.purposeOfVisit}`;
      return searchIn.toLowerCase().includes(searchTerm.toLowerCase());
    });

  // Approve an item
  const approveItem = (index) => {
    const updatedData = [...data];
    updatedData[index].status = 'Approved';
    setData(updatedData);
  };

  // Reject an item
  const rejectItem = (index) => {
    const updatedData = [...data];
    updatedData[index].status = 'Rejected';
    setData(updatedData);
  };

  // View item details
  const viewItem = (index) => {
    // Logic to view the item details
    console.log(`Viewing item at index ${index}`);
  };

  return (
    <div className='member-Page' style={{height:'520px'}}>
      <div style={{ marginTop: '11px' , marginRight:'12px' }} className="filter-container">
        <h2></h2>
        {/* Search Input */}
        <div className='controls'>
          <div className='search-box' style={{ backgroundColor: '#fff' }}>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <BiSearch className='icon' />
          </div>

          {/* Filter Dropdown */}
          <select
            id="status-filter"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className='filter-container'
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Scrollable Table */}
      <div className='content-table'>
        <table className='request-table' >
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Event Date</th>
              <th>Member Name</th>
              <th>Member ID</th>
              <th>Status</th>
              <th>Parent Club</th>
              <th>Affiliated Club</th>
              <th>Request Date</th>
              <th>Purpose of Visit</th>
              <th>Attachments</th>
              <th>Additional Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.eventName}</td>
                <td>{item.eventDate}</td>
                <td>{item.memberName}</td>
                <td>{item.memberId}</td>
                <td>{item.status}</td>
                <td>{item.parentClub}</td>
                <td>{item.affiliatedClub}</td>
                <td>{item.requestDate}</td>
                <td>{item.purposeOfVisit}</td>
                <td>{item.attachments}</td>
                <td>{item.additionalNotes}</td>
                <td>
                  {item.status === 'Pending' && (
                    <>
                      <button onClick={() => viewItem(index)} className='req-btn'>View</button>
                      <button onClick={() => approveItem(index)} className='req-btn-A'>Approve</button>
                      <button onClick={() => rejectItem(index)} className='req-btn-R'>Reject</button>
                    </>
                  )}
                  {item.status === 'Approved' && (
                    <>
                      <button onClick={() => viewItem(index)} className='req-btn'>View</button>
                      <button onClick={() => rejectItem(index)} className='req-btn-R'>Reject</button>
                    </>
                  )}
                  {item.status === 'Rejected' && (
                    <button onClick={() => viewItem(index)}>View</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestContent;
 