
    import React, { useState } from 'react';
import './styles/contentstyle.css'; // Import the CSS file for styling
import { BiSearch } from 'react-icons/bi';




const Membersdata = () => {
  // Sample data for the table
  const initialData = [
    {
      memberName: 'John Doe',
      memberId: 'M1234',
      membershipType: 'Premium',
      status: 'Active',
      joinDate: '2022-05-10',
    },
    {
      memberName: 'Jane Smith',
      memberId: 'M5678',
      membershipType: 'Standard',
      status: 'Expired',
      joinDate: '2020-08-15',
    },
    {
      memberName: 'Alice Johnson',
      memberId: 'M7890',
      membershipType: 'Premium',
      status: 'Active',
      joinDate: '2021-03-25',
    },
    // Add more sample data as needed
  ];

  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Handle member removal
  const removeMember = (index) => {
    const confirmRemove = window.confirm('Are you sure you want to remove this member?');
    if (confirmRemove) {
      const newData = data.filter((_, i) => i !== index);
      setData(newData);
    }
  };

  // Search function that filters based on user input
  const filteredData = data.filter(member => {
    const matchesSearch = Object.values(member)
      .join(' ')
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'All' || member.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div style={{ marginTop: '-11px' }} className="filter-container">
        <h2>Club's Members Data</h2>
        {/* Search Input */}
        <div className='controls'>
          <div className='search-box' style={{ backgroundColor: '#fff' }}>
        
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search members..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /><BiSearch className='icon' /></div>

      {/* Filter Dropdown */}
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Active">Active</option>
        <option value="Expired">Expired</option>
      </select>
</div></div>
      {/* Scrollable Table */}
      <div className='req-table'>
        <table width="100%" className='request-table'>
          <thead>
            <tr>
              <th>Member Name</th>
              <th>Member ID</th>
              <th>Membership Type</th>
              <th>Status</th>
              <th>Join Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((member, index) => (
                <tr key={index}>
                  <td>{member.memberName}</td>
                  <td>{member.memberId}</td>
                  <td>{member.membershipType}</td>
                  <td>{member.status}</td>
                  <td>{member.joinDate}</td>
                  <td>
                    <button onClick={() => alert('View Profile')} className='req-btn'>
                      View 
                    </button>
                    <button onClick={() => alert('Edit Member')} className='req-btn-A'>
                      Edit 
                    </button>
                    <button onClick={() => removeMember(index)} className='req-btn-R'>
                      Remove 
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center' }}>No matching members found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Membersdata;
