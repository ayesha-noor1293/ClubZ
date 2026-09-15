import React, { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { FaRegBell } from 'react-icons/fa';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import './styles/admindashboardmain.css';
import notificationsData from './notificationDataAdmin'; // Ensure this is the correct path

const AdminHeaderMain = () => {
  const getInitialNotifications = () => {
    const savedNotifications = localStorage.getItem('notifications');
    if (savedNotifications) {
      console.log('Loaded from localStorage:', JSON.parse(savedNotifications));
      return JSON.parse(savedNotifications);
    }
    console.log('Using default notificationsData:', notificationsData);
    return notificationsData;
  };
  localStorage.removeItem('notifications');

  
  const [showNotifications, setShowNotifications] = useState(false);
  const [notificationList, setNotificationList] = useState(getInitialNotifications());
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  useEffect(() => {
    console.log('Notification list updated:', notificationList);
    localStorage.setItem('notifications', JSON.stringify(notificationList));
  }, [notificationList]);

  const handleDeleteNotification = (id) => {
    console.log('Deleting notification with id:', id);
    const updatedNotifications = notificationList.filter(notification => notification.id !== id);
    setNotificationList(updatedNotifications);
    console.log('Updated notifications list:', updatedNotifications);
  };

  const handleBellClick = () => {
    setShowNotifications(true);
  };

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  const handleLogoutConfirm = (confirm) => {
    if (confirm) {
      window.location.href = '/LoginPage'; // Adjust to your actual login route
    }
    setShowLogoutConfirm(false);
  };

  return (
    <div className='content--header'>
      <h1 className='header--title'>Dashboard</h1>
      <div className='header--activity'>
        <div className='search-box'>
          <input type='text' placeholder='Search anything here...' />
          <BiSearch className='icon' />
        </div>
        <div className='notify' onClick={handleBellClick}>
          <FaRegBell className='icon' />
          {notificationList.length > 0 && (
            <div className='notification-count'>{notificationList.length}</div>
          )}
        </div>
        <div className='logout' onClick={handleLogoutClick}>
          <RiLogoutCircleRLine className='icon' />
        </div>
      </div>

      {showNotifications && (
        <div className='noti-dialog notifications-dialog'>
          <div className='dialog-header'>
            <h2>Notifications</h2>
            <button className='close-btn' onClick={() => setShowNotifications(false)}>×</button>
          </div>
          <div className='notifications-list'>
            {notificationList.length === 0 ? (
              <p>No notifications</p>
            ) : (
              notificationList.map(notification => (
                <div key={notification.id} className='notification-item'>
                  {notification.text}
                  <button onClick={() => handleDeleteNotification(notification.id)} className='delete-btn' style={{ marginLeft: '10px' }}>x</button>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {showLogoutConfirm && (
        <div className='dialog-overlay'>
          <div className='dialog logout-dialog'>
            <h2 style={{ textAlign: 'center' }}>Are you sure you want to log out?</h2>
            <div className='space'>
              <button className='confirm-btn' onClick={() => handleLogoutConfirm(true)}>Yes</button>
              <button className='cancel-btn' onClick={() => handleLogoutConfirm(false)}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHeaderMain;
