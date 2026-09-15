
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProfileDashboard from './components/ProfileDashboard';
import  ClubPage  from './components/ClubPage';
import IntroDashbaord from './components/IntroDashboard';
import EventOverview from './components/EventsOverview';
import ClubDetail from './components/ClubDetail';

import LoginPage from './LOGIN PAGES/LoginPage';
import Forgot from './LOGIN PAGES/Forgot';
import TAC from './LOGIN PAGES/TAC';
import Register from './LOGIN PAGES/Register';
import EventForm from './components/EventForm';

import AdminMAin from './Admin dashboard/AdminMAin';
import MembersPage from './Admin dashboard/pages/MembersPage';
import RequestsPage from './Admin dashboard/pages/RequestsPage';

import AdminProfilePage from './Admin dashboard/pages/AdminProfilePage';
import Document from './Admin dashboard/pages/Document';

function App() {
  return (
    <Router>
    <Routes>
    <Route path='/LoginPage' element={<LoginPage/>}/>
      <Route path="/Forgot" element={<Forgot />} />
      <Route path='/Register' element={<Register/>}/>
      <Route path="/TAC" element={<TAC />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/ProfileDashboard" element={<ProfileDashboard />} />
      <Route path="/MyClub" element={<ClubPage /> }/>
      <Route path="/IntroLetterpage" element={<IntroDashbaord/> }/>
      <Route path="/EventOverview" element={<EventOverview/> }/>
      <Route path="/ClubDetail" element={<ClubDetail/> }/>
      <Route path="/EventForm" element={<EventForm/> }/>

      
      <Route path="/Admin" element={<AdminMAin/> }/>
      <Route path="/MembersPage" element={<MembersPage/> }/>
      <Route path="/RequestsPage" element={<RequestsPage/> }/>

      <Route path="/AdminProfilePage" element={<AdminProfilePage/> }/>
      <Route path="/Document" element={<Document/> }/>
    </Routes>
    </Router>


  );
}

export default App;
