import React, { useState } from 'react';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

// Register required components for charts
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Sample = () => {
  // State for Bar Chart (New Members by Month/Year)
  const [selectedYear, setSelectedYear] = useState('2023');
  const newMembersData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'New Members',
        data: [50, 40, 70, 55, 85, 90, 100, 60, 40, 75, 50, 100], // Dummy data
        backgroundColor: '#3498DB', // Accent Color
      },
    ],
  };

  // State for Pie Chart (Active vs Non-Active Members)
  const [selectedMonthPie, setSelectedMonthPie] = useState('January');
  const pieData = {
    labels: ['Active', 'Non-Active'],
    datasets: [
      {
        data: [300, 100], // Dummy data
        backgroundColor: ['#2C3E50', '#E74C3C'], // Primary and Secondary Colors
      },
    ],
  };

  // State for Doughnut Chart (Requests)
  const [selectedMonthDoughnut, setSelectedMonthDoughnut] = useState('January');
  const doughnutData = {
    labels: ['Pending', 'Approved', 'Rejected'],
    datasets: [
      {
        data: [100, 200, 50], // Dummy data
        backgroundColor: ['#3498DB', '#2ECC71', '#E74C3C'], // Accent, Success, and Error Colors
      },
    ],
  };

  return (
    <div className="stats-dashboard">
      {/* New Members Bar Chart Card */}
      <div className="card">
        <div className="card-header">
          <h3>New Members</h3>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>
        <div className="card-content">
          <Bar data={newMembersData} />
        </div>
      </div>

      {/* Active vs Non-Active Pie Chart Card */}
      <div className="card">
        <div className="card-header">
          <h3>Active vs Non-Active Members</h3>
          <select
            value={selectedMonthPie}
            onChange={(e) => setSelectedMonthPie(e.target.value)}
          >
            {newMembersData.labels.map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
        </div>
        <div className="card-content">
          <Pie data={pieData} />
          <p>Total Members: 400</p>
        </div>
      </div>

      {/* Requests Doughnut Chart Card */}
      <div className="card">
        <div className="card-header">
          <h3>Requests</h3>
          <select
            value={selectedMonthDoughnut}
            onChange={(e) => setSelectedMonthDoughnut(e.target.value)}
          >
            {newMembersData.labels.map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
        </div>
        <div className="card-content">
          <Doughnut data={doughnutData} />
        </div>
      </div>
    </div>
  );
};

export default Sample;
