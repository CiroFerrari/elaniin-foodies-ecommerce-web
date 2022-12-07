import React from 'react';
import PropTypes from 'prop-types';
import homeBackground from '../../images/heroImages/hero-background.png';
import menuBackground from '../../images/menuHero/menuHeroBackground.png';
import Header from './Header';
import NavBar from './NavBar';
import MenuHeader from './MenuHeader';

const homeHeroBackground = {
  backgroundImage: `url(${homeBackground})`,
  backgroundRepeat: 'no-repeat',
  backgroundPositionX: 'right',
};

const menuHeroBackground = {
  backgroundImage: `url(${menuBackground})`,
  backgroundRepeat: 'no-repeat',
  backgroundPositionX: 'right',
  backgroundSize: 'contain',
  backgroundColor: 'black',
};

export default function HeroContainer({ page }) {
  const backgroundHero = page === 'home' ? homeHeroBackground : menuHeroBackground;
  return (
    <div className="pt-[57px] pl-[101px] pr-[94px] w-[100%] min-h[0px]" style={backgroundHero}>
      <NavBar page={page} />
      {
        page === 'home' ? <Header /> : <MenuHeader />
      }
    </div>
  );
}

HeroContainer.propTypes = {
  page: PropTypes.string.isRequired,
};
