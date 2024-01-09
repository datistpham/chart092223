import React from 'react';
import './Sidebar.css'; // Import file CSS
import { Link } from 'react-router-dom';
import { FormControlLabel, Switch } from '@mui/material';

const Sidebar = () => {
  const label = { inputProps: { 'aria-label': 'Dark mode' } };
  return (
    <div className="sidebar" style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
      <ul>
        <li style={{ textAlign: "left" }}><a href="#">Admin</a></li>
        <li style={{ textAlign: "left" }}><Link to="/">Home</Link></li>
        <li style={{ textAlign: "left" }}><Link to="/dashboard">Dashboard</Link></li>
      </ul>
      <ul>
        <li style={{ textAlign: "left" }}><a href="#">Setting</a></li>
        <li style={{ textAlign: "left" }}><FormControlLabel control={<Switch defaultChecked />} label="Dark mode" /></li>
      </ul>
    </div>
  );
};

export default Sidebar;
