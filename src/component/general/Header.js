import React from 'react';
import './Header.css'; // Import file CSS
import ExcelToJsonConverterDialog from './PopupConvert';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="header">
      <h1>
        <img style={{width: 100, height: 50}} alt="" src="https://res.cloudinary.com/cockbook/image/upload/v1704760435/single/logo-1_r7garg.jpg" />
      </h1>
      <nav className="navbar">
        <ul>
          <li className="c-flex-center" style={{justifyContent: "flex-start"}}><Link to="#">Home</Link></li>
          <li className="c-flex-center" style={{justifyContent: "flex-start"}}><Link to="#">Chart 1</Link></li>
          <li className="c-flex-center" style={{justifyContent: "flex-start"}}><Link to="#">Chart 2</Link></li>
          <li className="c-flex-center" style={{justifyContent: "flex-start"}}><Link to="#">Contact</Link></li>
          <ExcelToJsonConverterDialog />
        </ul>
      </nav>
    </header>
    <div className="header-placeholder"></div>
    </>
  );
};

export default Header;
