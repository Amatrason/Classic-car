import React from 'react';
import './backimg.css';
export default function BackgroundDiv() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '800px',
        backgroundImage: 'url(/hero-car-image.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}
    >
      <div
        style={{
          //   backgroundColor: 'rgba(0,0,0,0.5)',
          padding: '5px 10px',
          borderRadius: '4px',
        }}
      >
        <div className='text'>some text about cars</div>
      </div>
    </div>
  );
}
