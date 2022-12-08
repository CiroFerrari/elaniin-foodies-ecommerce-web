import React from 'react';
import menuHeroHamburguer from '../../images/menuHero/menuHeroHamburger.png';
import menuBackground from '../../images/menuHero/menuHeroBackground.png';

const menuHeroBackground = {
  backgroundImage: `url(${menuBackground})`,
  backgroundRepeat: 'no-repeat',
  backgroundPositionX: 'right',
  backgroundSize: 'contain',
  backgroundColor: 'black',
};

export default function MenuHeader() {
  return (
    <section className="flex justify-between bg-black pt-[132px] pl-[101px] pr-[94px]" style={menuHeroBackground}>
      <header className="max-w-[38vw]">
        <h1 className="mt-[185px] font-Druk-Text-Wide font-bold text-[60px] leading-[60px] mb-[21px] text-white">
          Cada sabor es una nueva
          <span className="block bg-[#FFD600] pl-[13px] pr-[26px] w-[fit-content] rotate-[-0.64deg] text-black pb-[2px]"> experiencia</span>
        </h1>
      </header>
      <img src={menuHeroHamburguer} alt="Hamburguer" className="max-w-[42vw] mt-[40px]" />
    </section>
  );
}
