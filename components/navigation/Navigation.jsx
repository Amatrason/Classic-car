import React from 'react';
import './navigation.css';

const Navigation = () => {
  return (
    <nav>
        <a href="/" className="navigation-item">
            Home
        </a>
        <a href="/about" className="navigation-item">
            About
        </a>
    </nav>
  );
};

export default Navigation;
