
    import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import './IntroDashboard.css';
    import { PiLineVerticalBold } from "react-icons/pi";
    import { MdDownloadForOffline } from "react-icons/md";
    import { IoIosSend } from "react-icons/io";
    import {  BiSearch } from 'react-icons/bi';
    const letters = [
      {
        id: 'A23',
        title: 'Annual Hackathon Tournament',
        ParentClub: 'Tech Innovators Society',
        AffClub: 'Coding Club',
        Date: 'August 20, 2024',
        Status: 'Approved',
      },
      {
        id: 'C45',
        title: 'Chefs Masterclass',
        ParentClub: 'Culinary Arts Club',
        AffClub: 'Cuisine Club',
        Date: 'August 28, 2024',
        Status: 'Pending',
      },
      {
        id: 'T78',
        title: 'Python Coding Class',
        ParentClub: 'Tech Innovators Society',
        AffClub: 'Learn Coding with us Club',
        Date: 'August 18, 2024',
        Status: 'Rejected',
      },
    ];
    
    function IntroContent() {
      const [data, setData] = useState(letters);
      const [filter, setFilter] = useState('All');
      const [searchTerm, setSearchTerm] = useState('');
    
      const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
          const newData = data.filter(item => item.id !== id);
          setData(newData);
        }
      };
    
      const handleDownload = (id) => {
        const letter = data.find(letter => letter.id === id);
        if (letter) {
          const content = `
            Event Name: ${letter.title}
            Parent Club: ${letter.ParentClub}
            Affiliated Club: ${letter.AffClub}
            Date: ${letter.Date}
            Status: ${letter.Status}
          `;
          const file = new Blob([content], { type: 'text/plain' });
          const link = document.createElement('a');
          link.href = URL.createObjectURL(file);
          link.setAttribute('download', `letter_${letter.id}.txt`);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      };
    
      const handleFilterChange = (e) => {
        setFilter(e.target.value);
      };
    
      const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
      };
    
      const highlightText = (text, highlight) => {
        if (!highlight) return text;
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index} className="highlight">{part}</span>
          ) : (
            part
          )
        );
      };
    
      const filteredData = data
        .filter(item => filter === 'All' || item.Status === filter)
        .filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.ParentClub.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.AffClub.toLowerCase().includes(searchTerm.toLowerCase()));
    
      return (
        <div className="ILD-card" style={{ backgroundColor: '#ECF0F1', borderRadius: '25px',height:'480px' }}>
          <div className="ILD-filter-container">
            <h2>Introduction Letter</h2>
            <div className="controls">
              <select id="status-filter" onChange={handleFilterChange}>
                <option value="All">All</option>
                <option value="Approved">Approved</option>
                <option value="Pending">Pending</option>
                <option value="Rejected">Rejected</option>
              </select>
              <div className='search-box' style={{backgroundColor:'#fff'}}>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                
              /><BiSearch className='icon'/></div>
              <div > <button className='Apply'><Link to='/EventForm' style={{color:'#fff'}}>Apply</Link> <IoIosSend style={{verticalAlign:'top',fontSize:'15px'}}/></button></div>
            </div>
          </div>
    
          <div className="ILD-table-container">
            <table className='ILD-table'>
              <thead>
                <tr style={{ backgroundColor: '#fff' }}>
                  <th>ID</th>
                  <th>Event</th>
                  <th>Parent Club</th>
                  <th>Affiliated Club</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map(item => (
                  <tr key={item.id} className="ILD-data-row">
                    <td><PiLineVerticalBold style={{ color: '#3498DB', verticalAlign: 'middle', fontSize: '26px', marginTop: '-7px' }} />{item.id}</td>
                    <td>{highlightText(item.title, searchTerm)}</td>
                    <td>{highlightText(item.ParentClub, searchTerm)}</td>
                    <td>{highlightText(item.AffClub, searchTerm)}</td>
                    <td>{item.Date}</td>
                    <td>{item.Status}</td>
                    <td>
                      <button onClick={() => handleDownload(item.id)} className="ILD-download-button">
                        <MdDownloadForOffline />
                      </button>
                      <button onClick={() => handleDelete(item.id)} className="ILD-delete-button">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    


export default IntroContent;