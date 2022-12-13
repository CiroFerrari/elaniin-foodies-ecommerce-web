import React from 'react';
import menuHeroHamburguer from '../../images/menuHero/menuHeroHamburger.png';

const menuHeroBackground = {
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'black',
};

export default function MenuHeader() {
  return (
    <section className="menu-header mt-[0px] flex flex-col-reverse md:flex-row md:pl-[53px] md:pb-[90px] justify-between bg-black md:pt-[132px] lg:pl-[101px] lg:pr-[94px] max-w-[1500px] mx-auto xl:mt-[-60px]" style={menuHeroBackground}>
      <header className="max-w-[343px] md:max-w-[360px] lg:max-w-[579px] self-center mb-[106px] md:mb-[0px]">
        <h1 className="mt-[52px]  lg:mt-[185px] font-Druk-Text-Wide font-bold text-[35px] leading-[35px] md:text-[40px] md:leading-[40px] lg:text-[60px] lg:leading-[60px] md:mb-[21px] text-white">
          Cada sabor es una nueva
          <span className="block relative z-20 pr-[26px] w-[fit-content]  text-black pb-[2px]">
            experiencia
            <span className="block absolute mt-[-41px] py-[10px] md:mt-[-40px] lg:mt-[-67.5px] md:left-[-5px] lg:py-[20px] z-[-10] rotate-[-0.64deg] bg-[#FFD600] text-left w-[fit-content]  text-[#FFD600] pb-[2px]"> expiiiiiiiencia</span>
          </span>
        </h1>
      </header>
      <img src={menuHeroHamburguer} alt="Hamburguer" className="w-[87vw] mt-[121px] ml-[-11px] self-center max-w-[328px] md:w-[42vw] md:max-w-[627px] md:mt-[40px] md:ml-[0px]" />
    </section>
  );
}
