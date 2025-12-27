import React from 'react';
import BackgroundDiv from '../components/Backimg'
import Hero from '../components/hero/hero'
import Logo from '../components/logo'
import About from '../components/about/About';
import Cars from '../components/cars/Cars'

export default function Home() {
  return (
    <div>
      <BackgroundDiv />
      <Logo />
      <About />
      <Cars/>
    </div>
  );
}
import Image from 'next/image'
