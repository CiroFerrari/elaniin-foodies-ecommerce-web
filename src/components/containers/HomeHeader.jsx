import React from 'react';
import heroHamburguer from '../../images/heroImages/hero-hamburger.png';
import CtaButton from '../base/CtaButton';
import homeBackground from '../../images/heroImages/hero-background.png';

const homeHeroBackground = {
  backgroundImage: `url(${homeBackground})`,
  backgroundRepeat: 'no-repeat',
  backgroundPositionX: 'right',
};

export default function HomeHeader() {
  return (
    <section className="flex justify-between pt-[132px] pb-[220px] pl-[101px] pr-[94px]" style={homeHeroBackground}>
      <header className="max-w-[38vw]">
        <h1 className="mt-[100px] font-Druk-Text-Wide font-bold text-[60px] leading-[60px] mb-[21px]">
          Un nuevo sabor esta en
          <span className="block bg-[#FFD600] pl-[13px] pr-[31px] w-[fit-content] text-black pb-[2px] ml-[-13px]">
            la ciudad
          </span>
        </h1>
        <p className="font-Open-Sans font-normal text-[18px] leading-[25px] opacity-40 mb-[46px]">Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables</p>
        <CtaButton name="Encuentranos" />
      </header>
      <img src={heroHamburguer} alt="Hamburguer" className="max-w-[38vw] max-h-[30vw]" />
    </section>
  );
}
