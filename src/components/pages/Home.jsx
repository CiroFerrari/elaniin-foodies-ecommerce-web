import React, { useEffect } from 'react';
import BranchesContainer from '../containers/HomeBranchesContainer';
import DownloadApp from '../containers/HomeDownloadApp';
import HomeAbout from '../containers/HomeAbout';
import HomeContact from '../containers/HomeContact';
import HomeHeader from '../containers/HomeHeader';
import Testimonials from '../containers/HomeTestimonials';

export default function Home() {
  useEffect(() => {
    document.title = 'Home | Foodies';
  }, []);
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
