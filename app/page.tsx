import React from 'react';
import BackgroundDiv from '../components/Backimg'
import Hero from '../components/hero/hero'
import Logo from '../components/logo'
import About from '../components/about/About';

export default function Home() {
  return (
    <div>
      <BackgroundDiv />
      <Logo />
      <About />
    </div>
  );
}
import Image from 'next/image'
