
import './styles/admindashboardmain.css';
import PendingRequest from './PendingRequest';
import MemberData from './Membersdata';
import Profile from './ProfileAdmin';
import Statistics from './Statistics';
import  SideBar  from './AdminSidebarMain';
import MainHeader from './AdminHeaderMain';

function AdminMAin(){
  return (
    <div className='dashboard'>
<SideBar/>

<div className='dashboard--Content'>
<div className="head">
<MainHeader />
    

    <div className="main-content"  ><div className='whole-div' >
    <div className='first-row'>

                   <div className='stats'><Statistics /></div>
                   <div className='adminprofile'><Profile /></div> </div>

                   <div className='sec-row'><div className='pendin-requests'><PendingRequest /></div>
                    </div>

                    <div className='third-row'><div className='memberdata'><MemberData /></div>
                    </div>
                 
                </div></div>
                </div>
</div>
    </div>
  );
}

export default AdminMAin;
