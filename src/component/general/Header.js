import React from 'react';
import './Header.css'; // Import file CSS

const Header = () => {
  return (
    <>
      <header className="header">
      <h1>Ứng dụng Biểu đồ</h1>
      <nav className="navbar">
        <ul>
          <li><a href="#">Trang chủ</a></li>
          <li><a href="#">Biểu đồ 1</a></li>
          <li><a href="#">Biểu đồ 2</a></li>
          <li><a href="#">Liên hệ</a></li>
        </ul>
      </nav>
    </header>
    <div className="header-placeholder"></div>
    </>
  );
};

export default Header;
