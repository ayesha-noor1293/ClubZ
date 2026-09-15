import React from 'react'
import './styles/ClubDetail.css'
 const ClubDetail = () => {
  return (
    <div class="CC-club-header">
  <div class="CC-club-info">
    <img src="CC-club-logo.png" alt="CC-Club Logo" class="CC-club-logo" />
    <div class="CC-membership-info">
      <p>Member Since: March 15, 2020</p>
      <p>Membership Expires: March 14, 2025</p>
      <p>Membership Status: <span class="active-status">Active</span></p>
    </div>
    <div class="CC-quick-actions">
      <button class="CC-action-btn">Renew Membership</button>
      <button class="CC-action-btn">Leave Club</button>
      <button class="CC-action-btn">Upgrade Membership</button>
    </div>
  </div>

  <div class="CC-club-description">
    <p>“The Fitness & Wellness Club is dedicated to promoting health and fitness among its members through various activities, wellness programs, and community events. Our mission is to create a supportive environment that encourages physical and mental well-being.”</p>
  </div>

  <div class="CC-key-contacts">
    <p>Club Coordinator: Jane Smith | Email: jane.smith@fitnessclub.com | Phone: +123456789</p>
  </div>
  


  <div class="CC-club-events">
    <h3 style={{borderBottom:'1px solid #EBEFF0'}}>Club Events:</h3>
    <div class="CC-event">
      <h4>Yoga Retreat</h4>
      <p>Date: October 12, 2024</p>
      <p>Location: Wellness Center, Room 101</p>
      <p>Description: “A day-long yoga retreat focusing on mindfulness and relaxation. Open to all skill levels.”</p>
      <button class="event-action">Register Now</button>
    </div>
    <div class="CC-event">
      <h4>Nutrition Workshop</h4>
      <p>Date: November 5, 2024</p>
      <p>Location: Main Hall, Fitness & Wellness Club</p>
      <p>Description: “Learn about balanced diets and how to maintain a healthy lifestyle in this informative workshop.”</p>
      <button class="CC-event-action">Register Now</button>
    </div>
  </div>

  <div class="CC-recent-news">
    <h3 style={{borderBottom:'1px solid #EBEFF0'}}>Recent News & Announcements:</h3>
    <p><strong>New Yoga Classes Starting in October!</strong> (September 1, 2024)</p>
    <p>“We are excited to announce that new yoga classes will begin in October, with sessions available every Tuesday and Thursday.”</p>

    <p><strong>Annual Wellness Retreat: Registration Open!</strong> (August 25, 2024)</p>
    <p>“Join us for our annual wellness retreat. Limited spots available, so register early!”</p>
  </div>

  <div class="CC-membership-benefits">
    <h3 style={{borderBottom:'1px solid #EBEFF0'}}>Membership Benefits:</h3>
    <ul>
      <li>Access to all fitness facilities, including gym, pool, and sauna</li>
      <li>Discounts on personal training sessions and wellness programs</li>
      <li>Monthly health consultations with certified professionals</li>
      <li>Priority access to club events and workshops</li>
    </ul>
  </div>

  <div class="CC-club-policies">
    <h3 style={{borderBottom:'1px solid #EBEFF0'}}>Club Policies:</h3>
    <p>“All members must adhere to the club’s code of conduct, which includes respectful behavior towards other members and staff.”</p>
    <p>“The use of facilities is subject to the club’s rules and regulations, which are designed to ensure a safe and welcoming environment for everyone.”</p>
  </div>

  <div class="CC-club-documents">
    <h3 style={{borderBottom:'1px solid #EBEFF0'}}>Club Documents:</h3>
    <ul>
      <li><a href="#somepage">Club Bylaws.pdf</a></li>
      <li><a href="#somepage">Event Calendar.pdf</a></li>
      <li><a href="#somepage">Membership Agreement.pdf</a></li>
    </ul>
  </div>

  <div class="CC-photo-gallery">
    <h3 style={{borderBottom:'1px solid #EBEFF0'}}>Photo Gallery:</h3>
    <div class="photos">
      
      <img src="photo1.jpg" alt="Club Event" />
      <img src="photo2.jpg" alt="Club Workshop" />
      <img src="photo3.jpg" alt="Yoga Session" />
    </div>
  </div>

  <div class="CC-discussion-forums">
    <h3 style={{borderBottom:'1px solid #EBEFF0'}}>Discussion Forums:</h3>
    <a href="#somepage" class="forum-link">Join the Discussion</a>
  </div>
</div>

  )
}
export default ClubDetail;