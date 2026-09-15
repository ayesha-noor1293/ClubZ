import React from 'react'
import SidebarProfile from './My Clubs/ClubPageSideBar.jsx';
import ClubPageContent from './My Clubs/ClubPageContent.jsx';
import ClubPageHeader from './ClubPageHeader';
 const ClubPage = () => {
    return (
        <div className='dashboard'>
    <SidebarProfile />
    
    <div className='dashboard--Content'>
    <div className="head">
    <ClubPageHeader />
        
    
        <div className="main-content" >
                       <ClubPageContent />
                       
                        
                    </div>
                    </div>
    </div>
        </div>
      );
}
export default ClubPage;
