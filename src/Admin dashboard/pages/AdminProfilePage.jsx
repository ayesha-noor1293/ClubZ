
import './full.css';

import  SideBar  from './HandS/ProfileSidebar';
import MainHeader from './HandS/ProfileHeader';
import ProfileContent from './ProfileContent';

function AdminProfilePage(){
  return (
    <div className='dashboard'>
<SideBar/>

<div className='dashboard--Content'>
<div className="head">
<MainHeader />
    

    <div className="main-content"  >
    
                 <ProfileContent/>
                </div>
                </div>
</div>
    </div>
  );
}

export default AdminProfilePage;
