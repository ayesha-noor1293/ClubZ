import React from 'react';
import './styles/EventOverview.css';

const EventOverview = () => {
  return (
    <div className="event-overview">
      <div className="event-banner">
        <h1>Yoga Retreat</h1>
        <p>Date & Time: October 12, 2024 | 9:00 AM - 5:00 PM</p>
        <p>Location: Wellness Center, Room 101</p>
        <p>Parent Club: Fitness & Wellness Club</p>
        <p>Affiliated Club: Yoga Enthusiasts Society</p>
      </div>

      <div className="event-description">
        <h2>Event Description</h2>
        <p>
          “Join us for a rejuvenating day of yoga, mindfulness, and relaxation. This retreat is designed to help you unwind, connect with your inner self, and meet other like-minded individuals. All levels are welcome, and no prior experience is required. Please bring your own yoga mat and water bottle.”
        </p>
      </div>

      <div className="event-agenda">
        <h2>Event Agenda</h2>
        <ul>
          <li>9:00 AM - 10:30 AM: Morning Yoga Session</li>
          <li>10:30 AM - 11:00 AM: Tea Break</li>
          <li>11:00 AM - 12:30 PM: Mindfulness Workshop</li>
          <li>12:30 PM - 1:30 PM: Lunch Break</li>
          <li>1:30 PM - 3:00 PM: Guided Meditation</li>
          <li>3:00 PM - 4:00 PM: Group Discussion</li>
          <li>4:00 PM - 5:00 PM: Closing Ceremony</li>
        </ul>
      </div>

      <div className="registration-details">
        <h2>Registration Details</h2>
        <p>Registration Status: <strong>Registered</strong></p>
        <p>Registration Deadline: October 5, 2024</p>
        <p>Capacity: 50 participants (Current: 35 registered)</p>
        <button className="cancel-registration-btn">Cancel Registration</button>
      </div>

      <div className="key-speakers">
        <h2>Key Speakers/Instructors</h2>
        <div className="speaker">
          <h3>Sarah Johnson: Certified Yoga Instructor</h3>
          <p>“Sarah has over 10 years of experience in teaching yoga and mindfulness. She specializes in Hatha and Vinyasa yoga.”</p>
        </div>
        <div className="speaker">
          <h3>David Lee: Mindfulness Coach</h3>
          <p>“David is a renowned mindfulness coach who has been guiding individuals towards inner peace through meditation for the past 8 years.”</p>
        </div>
      </div>

      <div className="event-materials">
        <h2>Event Materials</h2>
        <p>Materials Provided:</p>
        <ul>
          <li>Yoga mats (limited availability)</li>
          <li>Meditation cushions</li>
          <li>Handouts on mindfulness techniques</li>
        </ul>
        <p>Materials to Bring:</p>
        <ul>
          <li>Personal yoga mat</li>
          <li>Water bottle</li>
          <li>Comfortable clothing</li>
        </ul>
      </div>

      <div className="event-policies">
        <h2>Event Policies</h2>
        <p><strong>Attendance Policy:</strong> “Please arrive 15 minutes before the event starts. Latecomers may not be admitted.”</p>
        <p><strong>Cancellation Policy:</strong> “Cancellations must be made at least 48 hours before the event to receive a full refund.”</p>
        <p><strong>Health & Safety:</strong> “Please inform the organizers of any health conditions that may require special attention.”</p>
      </div>

      <div className="contact-information">
        <h2>Contact Information</h2>
        <p><strong>Event Organizer:</strong> Jane Smith | Email: jane.smith@fitnessclub.com | Phone: +123456789</p>
        <p><strong>Support:</strong> support@fitnessclub.com</p>
      </div>

      <div className="related-events">
        <h2>Related Events</h2>
        <ul>
          <li>Wellness Workshop: November 5, 2024 | <a href="#somepage">View Details</a> | <a href="#somepage">Register Now</a></li>
          <li>Group Hike: December 1, 2024 | <a href="#somepage">View Details</a> | <a href="#somepage">Register Now</a></li>
        </ul>
      </div>

      <div className="social-sharing">
        <h2>Share This Event</h2>
        <button className="social-btn facebook">Share on Facebook</button>
        <button className="social-btn twitter">Tweet</button>
        <button className="social-btn linkedin">Share on LinkedIn</button>
      </div>

     
    </div>
  );
};

export default EventOverview;
