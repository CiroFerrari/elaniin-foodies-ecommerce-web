import React from 'react';
import background from '../../images/heroImages/hero-background.png';
import NavBar from './NavBar';

const heroBackground = {
  backgroundImage: `url(${background})`,
  minHeight: '800px',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  backgroundPositionX: 'right',
};

export default function HeroContainer() {
  return (
    <div className="pt-[57px] pl-[101px]" style={heroBackground}>
      <NavBar />
    </div>
  );
}
