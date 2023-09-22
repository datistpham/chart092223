import React from 'react';
import './Sidebar.css'; // Import file CSS

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="#">Trang chủ</a></li>
        <li><a href="#">Biểu đồ 1</a></li>
        <li><a href="#">Biểu đồ 2</a></li>
        <li><a href="#">Liên hệ</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
