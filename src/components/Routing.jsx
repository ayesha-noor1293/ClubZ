


import React from 'react';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import ProfileDashboard from './ProfileDashboard';
const Routing  = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      
      <Route path="/" element={<ProfileDashboard />} />
    </Routes></Router>
  );
};

export default Routing ;
