import React from 'react';
import BranchesContainer from '../containers/HomeBranchesContainer';
import DownloadApp from '../containers/HomeDownloadApp';
import HomeAbout from '../containers/HomeAbout';
import HomeContact from '../containers/HomeContact';
import HomeHeader from '../containers/HomeHeader';
import Testimonials from '../containers/HomeTestimonials';

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
