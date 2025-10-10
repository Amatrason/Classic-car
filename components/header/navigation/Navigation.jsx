import React from 'react';
import './navigation.css';

import CloseButton from '../close-button/CloseButton';

const Navigation = ({ isOpen, toggle }) => {
  return (
    <nav className={`navigation ${isOpen ? 'open' : ''}`}>
      <CloseButton toggle={toggle} />

      <a href="/" className="navigation-item">
        Products
      </a>
      <a href="/about" className="navigation-item">
        About
      </a>
      <a href="/events" className="navigation-item">
        Events
      </a>
      <a href="/contact" className="navigation-item">
        Contact
      </a>
    </nav>
  );
};

export default Navigation;