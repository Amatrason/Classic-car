import React from 'react';
import Navigation from './Navigation';
export default function BackgroundDiv() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '800px',
        backgroundImage: 'url(/2025-Singer-911-Carrera-Coupe-009-1080.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}
    >
      <div
        style={{
          position: 'flex',
          bottom: '700px',
          left: '10px',
        //   backgroundColor: 'rgba(0,0,0,0.5)',
          padding: '5px 10px',
          borderRadius: '4px',
        }}
      >
        <Navigation/>
        some text about cars
      </div>
    </div>
  );
}
