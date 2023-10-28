import React from 'react';
import './Sidebar.css'; // Import file CSS

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Chart 1</a></li>
        <li><a href="#">Chart 2</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
