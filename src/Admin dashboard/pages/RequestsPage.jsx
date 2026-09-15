
import './full.css';

import  SideBar  from './HandS/RequestSidebar';
import MainHeader from './HandS/RequestHeader';
import RequestsContent from './RequestContent';

function RequestsPage(){
  return (
    <div className='dashboard'>
<SideBar/>

<div className='dashboard--Content'>
<div className="head">
<MainHeader />
    

    <div className="main-content"  >
    
                 <RequestsContent/>
                </div>
                </div>
</div>
    </div>
  );
}

export default RequestsPage;
