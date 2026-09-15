
import './styles/mainDashboard.css';
import MyClubs from './MyClubs';

import  SideBar  from './SideBar';
import MyProfile from './MyProfile';
import MainHeader from './MainHeader'
import Events from './Events';
import IntroductionLetterCard from './IntroductionLetterCard';


function Dashboard(){
  return (
    <div className='dashboard'>
<SideBar/>

<div className='dashboard--Content'>
<div className="head">
<MainHeader />
    

    <div className="main-content" style={{paddingLeft:'2px'}}>
                    <div className="middle-section">
                        <MyClubs />
                        <IntroductionLetterCard/>
  
                    </div>
                    
                   
                    <div className="right-section">
                        <MyProfile/>
                        <Events />
                       
                    </div>
                </div>
                </div>
</div>
    </div>
  );
}

export default Dashboard;
