import React from 'react';
import './hamburger.css';

const Hamburger = ({ isOpen, toggle }) => {
    return (
        <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggle}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
        </button>
    );
};

export default Hamburger;