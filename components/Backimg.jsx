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
        <div className='text'>Porsche[a] or Dr. Ing. h.c. F. Porsche AG is a German automobile manufacturer specializing in luxury, high-performance sports cars, SUVs and sedans, headquartered in Stuttgart, Baden-Württemberg, Germany. The company is owned by Volkswagen AG, a controlling stake of which is owned by Porsche Automobil Holding SE,</div>
      </div>
    </div>
  );
}
