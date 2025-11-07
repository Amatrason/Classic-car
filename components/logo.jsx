import React from 'react';

import './logo.css';
export default function BackgroundDiv() {
  return (
   

    <div
      style={{
          position: 'absolute',
           top: '30px',
           left: '60px',
        width: '190px',
        height: '190px',
        backgroundImage: 'url(/1701154591600322009-128.png)',
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

      </div>
    </div>
  );
}
