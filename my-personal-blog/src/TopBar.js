import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="logo">My fitness Blog</div>
      <div className="links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default TopBar;
