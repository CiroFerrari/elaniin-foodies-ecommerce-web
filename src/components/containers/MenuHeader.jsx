import React from 'react';
import menuHeroHamburguer from '../../images/menuHero/menuHeroHamburger.png';

const menuHeroBackground = {
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'black',
};

export default function MenuHeader() {
  return (
    <section className="menu-header mt-[0px] flex flex-col-reverse md:flex-row justify-between bg-black md:pt-[132px] md:pl-[101px] md:pr-[94px] max-w-[1500px] mx-auto xl:mt-[-60px]" style={menuHeroBackground}>
      <header className="max-w-[343px] self-center md:max-w-[38vw] mb-[106px] md:mb-[0px]">
        <h1 className="mt-[52px] md:mt-[185px] font-Druk-Text-Wide font-bold text-[35px] leading-[35px] md:text-[60px] md:leading-[60px] md:mb-[21px] text-white">
          Cada sabor es una nueva
          <span className="block bg-[#FFD600] pl-[13px] pr-[26px] w-[fit-content] rotate-[-0.64deg] text-black pb-[2px]"> experiencia</span>
        </h1>
      </header>
      <img src={menuHeroHamburguer} alt="Hamburguer" className="w-[87vw] mt-[121px] ml-[-11px] self-center max-w-[328px] md:w-[42vw] md:max-w-[627px] md:mt-[40px] md:ml-[0px]" />
    </section>
  );
}
