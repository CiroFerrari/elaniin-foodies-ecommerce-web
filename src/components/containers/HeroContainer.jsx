import React from 'react';
import background from '../../images/heroImages/hero-background.png';
import Header from './Header';
import NavBar from './NavBar';

const heroBackground = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundPositionX: 'right',
};

export default function HeroContainer() {
  return (
    <div className="pt-[57px] pl-[101px] pr-[94px] pb-[185px] w-[100%] min-h[0px]" style={heroBackground}>
      <NavBar />
      <Header />
    </div>
  );
}
