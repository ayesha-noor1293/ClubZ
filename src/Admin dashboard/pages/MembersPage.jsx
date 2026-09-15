
import './full.css';

import  SideBar  from './HandS/MemberSidebar';
import MainHeader from './HandS/MemebrHeader';
import MemberContent from './MemberContent';

function MembersPage(){
  return (
    <div className='dashboard'>
<SideBar/>

<div className='dashboard--Content'>
<div className="head">
<MainHeader />
    

    <div className="main-content"  >
    
                 <MemberContent/>
                </div>
                </div>
</div>
    </div>
  );
}

export default MembersPage;
