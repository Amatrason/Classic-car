import React from 'react';
// import BackgroundDiv from '../components/Backimg'
import Hero from '../components/hero/hero';
import About from '../components/about/About';
import Cars from '../components/cars/Cars';
import Signup from '../components/signup/Signup';

export default function Page() {
  return (
    <div>
      {/* <BackgroundDiv /> */}
      <Hero />
      <About />
      <Cars />
      <Signup />
    </div>
  );
}