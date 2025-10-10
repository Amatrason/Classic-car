import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div
      className='hero'
    >
      <div className="container hero-content-container">
        <div className="hero-symbol" />
        <div className='hero-text'>
          The Porsche 911 model series (pronounced Nine Eleven or in German: Neunelf) is a family of German two-door, high performance rear-engine sports cars, introduced in September 1964
        </div>
      </div>
    </div>
  );
};

export default Hero;