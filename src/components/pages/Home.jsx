import React, { useEffect, Suspense } from 'react';
import HomeAbout from '../containers/HomeAbout';
import HomeHeader from '../containers/HomeHeader';

const BranchesContainer = React.lazy(() => import('../containers/HomeBranchesContainer'));
const Testimonials = React.lazy(() => import('../containers/HomeTestimonials'));
const HomeContact = React.lazy(() => import('../containers/HomeContact'));
const DownloadApp = React.lazy(() => import('../containers/HomeDownloadApp'));

export default function Home() {
  useEffect(() => {
    document.title = 'Home | Foodies';
  }, []);
  return (
    <>
      <HomeHeader />
      <HomeAbout />
      <Suspense>
        <BranchesContainer />
        <Testimonials />
        <HomeContact />
        <DownloadApp />
      </Suspense>
    </>
  );
}
