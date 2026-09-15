import React, { useState } from 'react';
import './styles/contentstyle.css';
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Statistics = () => {
  const [selectedYear, setSelectedYear] = useState('2024'); // Default year set to 2024
  const [selectedMonthPie, setSelectedMonthPie] = useState('Sep-2024'); // Default filter for Pie Chart
  const [selectedMonthDoughnut, setSelectedMonthDoughnut] = useState('Sep-2024'); // Default filter for Doughnut Chart

  // Data for new members
  const newMembersData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'New Members',
        data: selectedYear === '2024'
          ? [70, 60, 80, 90, 100, 110, 95, 85, 75] // Jan-Sep data for 2024
          : [80, 75, 85, 90, 100, 110, 95, 85, 75, 95, 85, 110], // Full Jan-Dec data for previous years
        backgroundColor: '#3498DB',
      },
    ],
  };

  // Sample data for Pie and Doughnut charts
  const pieData = {
    labels: ['Active', 'Non-Active'],
    datasets: [
      {
        data: [300, 100], // Example data; should be updated based on selected month
        backgroundColor: ['#2C3E50', '#E74C3C'],
      },
    ],
  };

  const doughnutData = {
    labels: ['Pending', 'Approved', 'Rejected'],
    datasets: [
      {
        data: [100, 200, 50], // Example data; should be updated based on selected month
        backgroundColor: ['#3498DB', '#2C3E50', '#E74C3C'],
      },
    ],
  };

  const totalRequests = doughnutData.datasets[0].data.reduce((a, b) => a + b, 0);

  // Chart options for Bar, Pie, and Doughnut charts
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };
  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          maxRotation: 0,
          font: {
            size: 12,
          },
        },
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `New Members: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className='top-stats'>
      <h2>Statistical Data</h2>
      <div className="stats-dashboard">
        <div className="stats-div">
          {/* Horizontal scrollable content */}
          <div className="stats-scroll-container">
            {/* First Card: New Members */}
            <div className="stats-card">
              <div className="stats-card-header">
                <h3>New Members</h3>
                <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
              </div>
              <div className="stats-card-content">
                <Bar data={newMembersData} options={barOptions} />
              </div>
              <p className="total-members">Total Members: {newMembersData.datasets[0].data.reduce((a, b) => a + b, 0)}</p>
            </div>

            {/* Second Card: Active vs Non-Active Members */}
            <div className="stats-card">
              <div className="stats-card-header">
                <h3>Active vs Non-Active Members</h3>
                <select value={selectedMonthPie} onChange={(e) => setSelectedMonthPie(e.target.value)}>
                  {['Jan-2024', 'Feb-2024', 'Mar-2024', 'Apr-2024', 'May-2024', 'Jun-2024', 'Jul-2024', 'Aug-2024', 'Sep-2024'].map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <div className="stats-card-content">
                <Pie data={pieData} options={chartOptions} height={150} />
              </div>
              <p className="total-members">Total Members: 400</p>
            </div>

            {/* Third Card: Requests */}
            <div className="stats-card">
              <div className="stats-card-header">
                <h3>Requests</h3>
                <select value={selectedMonthDoughnut} onChange={(e) => setSelectedMonthDoughnut(e.target.value)}>
                  {['Jan-2024', 'Feb-2024', 'Mar-2024', 'Apr-2024', 'May-2024', 'Jun-2024', 'Jul-2024', 'Aug-2024', 'Sep-2024'].map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <div className="stats-card-content">
                <Doughnut data={doughnutData} options={chartOptions} height={150} />
              </div>
              <p className="total-requests">Total Requests: {totalRequests}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
