import React from 'react'
import IntroSidebar from './Introduction letter/IntroSidebar.jsx';
import IntroContent from './/Introduction letter/IntroContent.jsx';
import IntrodashboardHeader from './IntrodashboardHeader';
 const ClubPage = () => {
    return (
        <div className='dashboard'>
    <IntroSidebar />
    
    <div className='dashboard--Content'>
    <div className="head">
    <IntrodashboardHeader />
        
    
        <div className="main-content" >
                       <IntroContent />
                       
                        
                    </div>
                    </div>
    </div>
        </div>
      );
}
export default ClubPage;
