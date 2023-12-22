import React from 'react';
import './Header.css'; // Import file CSS
import ExcelToJsonConverterDialog from './PopupConvert';

const Header = () => {
  return (
    <>
      <header className="header">
      <h1>Chart web</h1>
      <nav className="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Chart 1</a></li>
          <li><a href="#">Chart 2</a></li>
          <li><a href="#">Contact</a></li>
          <ExcelToJsonConverterDialog />
        </ul>
      </nav>
    </header>
    <div className="header-placeholder"></div>
    </>
  );
};

export default Header;
