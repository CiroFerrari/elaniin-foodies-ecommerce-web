import React from 'react';
import BranchesContainer from '../containers/BranchesContainer';
import DownloadApp from '../containers/DownloadApp';
import HeroContainer from '../containers/HeroContainer';
import HomeAbout from '../containers/HomeAbout';
import HomeContact from '../containers/HomeContact';
import Testimonials from '../containers/Testimonials';

export default function Home() {
  return (
    <>
      <HeroContainer page="home" />
      <HomeAbout />
      <BranchesContainer />
      <Testimonials />
      <HomeContact />
      <DownloadApp />
    </>
  );
}
