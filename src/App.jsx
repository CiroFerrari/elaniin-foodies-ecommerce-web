import React from 'react';
import BranchesContainer from './components/containers/BranchesContainer';
import HeroContainer from './components/containers/HeroContainer';
import HomeAbout from './components/containers/HomeAbout';
import HomeContact from './components/containers/HomeContact';
import Testimonials from './components/containers/Testimonials';

export default function App() {
  return (
    <>
      <HeroContainer />
      <HomeAbout />
      <BranchesContainer />
      <Testimonials />
      <HomeContact />
    </>
  );
}
