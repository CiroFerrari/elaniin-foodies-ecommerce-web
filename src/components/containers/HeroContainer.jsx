import React from 'react';
import background from '../../images/heroImages/hero-background.png';
import Header from './Header';
import NavBar from './NavBar';

const heroBackground = {
  backgroundImage: `url(${background})`,
  minHeight: '00px',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  backgroundPositionX: 'right',
};

export default function HeroContainer() {
  return (
    <div className="pt-[57px] pl-[101px] pr-[94px] pb-[185px]" style={heroBackground}>
      <NavBar />
      <Header />
    </div>
  );
}
