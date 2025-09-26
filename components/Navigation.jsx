import React from 'react';
import './navigation.css';
import Contact from '../app/contact/page';
const Navigation = () => {
  return (
    <nav>
        <a href="/" className="navigation-item">
            Prodocts
        </a>
        <a href="/about" className="navigation-item">
            About
        </a>
         <a href="/contact" className="navigation-item">
            Contact
        </a>
       
    </nav>
  );
};

export default Navigation;