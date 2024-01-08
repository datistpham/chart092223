import React from 'react';
import './Sidebar.css'; // Import file CSS

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="#">Admin</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Dashboard</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
