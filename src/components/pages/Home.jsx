import React from 'react';
import BranchesContainer from '../containers/BranchesContainer';
import DownloadApp from '../containers/DownloadApp';
import HomeAbout from '../containers/HomeAbout';
import HomeContact from '../containers/HomeContact';
import HomeHeader from '../containers/HomeHeader';
import Testimonials from '../containers/Testimonials';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeAbout />
      <BranchesContainer />
      <Testimonials />
      <HomeContact />
      <DownloadApp />
    </>
  );
}
