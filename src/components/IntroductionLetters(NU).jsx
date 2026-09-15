// src/Table.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/IntroductionLetters.css'; // Import the CSS file
import { PiLineVerticalBold } from "react-icons/pi";
import { FcApproval } from 'react-icons/fc';
import { IoTimerOutline } from 'react-icons/io5';
import { FaTimesCircle } from 'react-icons/fa';

// Data with ids
const letter = [
  {
    id: 'A23',
    title: 'Annual Hackathon Tournament',
    ParentClub: 'Tech Innovators Society',
    AffClub: 'Coding Club',
    Date: 'August 20, 2024',
    Status: <FcApproval />,
  },
  {
    id: 'C45',
    title: 'Chefs Masterclass',
    ParentClub: 'Culinary Arts Club',
    AffClub: 'Cuisine Club',
    Date: 'August 28, 2024',
    Status: <IoTimerOutline />,
  },
  {
    id: 'T78',
    title: 'Python Coding Class',
    ParentClub: 'Tech Innovators Society',
    AffClub: 'Learn Coding with us Club',
    Date: 'August 18, 2024',
    Status: <FaTimesCircle />,
  },
];

function Table() {
  const [data, setData] = useState(letter);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      const newData = data.filter(item => item.id !== id);
      setData(newData);
    }
  };

  return (
    <div>
      <h1>Events Table</h1>
      <table className="data-table">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Parent Club</th>
            <th>Affiliated Club</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id} className="data-row">
             <td><PiLineVerticalBold style={{ marginLeft: '10px', fontSize: '24px', color:'#3498DB' }} /></td>
              <td>{item.title}</td>
              <td>{item.ParentClub}</td>
              <td>{item.AffClub}</td>
              <td>{item.Date}</td>
              <td>{item.Status}</td>
              <td>
                <Link to={`/view/${item.id}`} className="view-button">View</Link>
                <button onClick={() => handleDelete(item.id)} className="delete-button">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
