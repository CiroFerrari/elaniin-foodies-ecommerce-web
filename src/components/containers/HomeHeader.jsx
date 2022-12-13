import React from 'react';
import heroHamburguer from '../../images/heroImages/hero-hamburger.png';
import CtaButton from '../base/CtaButton';
// import homeBackground from '../../images/heroImages/hero-background.png';

// const homeHeroBackground = {
//   backgroundImage: `url(${homeBackground})`,
// };

export default function HomeHeader() {
  return (
    <section className="home-header ml-[9px] md:ml-[0px] bg-contain bg-no-repeat md:bg-right bg-right-top pt-[121px] flex flex-col-reverse md:flex-row items-center  md:justify-between md:pt-[127px] md:pb-[160px] md:pl-[53px] md:pr-[30px] xl:mt-[-84px] xl:pt-[132px] xl:pb-[220px] xl:pl-[101px] xl:pr-[94px] max-w-[1500px] mx-auto">
      <header className="w-[343px] md:w-[350px] xl:w-[579px]">
        <h1 className="text-[35px] leading-[35px] md:hidden xl:block md:mt-[25px] md:w-[100%] xl:mt-[100px] font-Druk-Text-Wide font-bold mb-[21px] md:text-[40px] md:leading-[40px] xl:text-[60px] xl:leading-[60px] ">
          Un nuevo sabor esta en
          <span className="block relative pl-[4px] md:hidden xl:block xl:pl-[13px] pr-[31px] w-[fit-content] text-black pb-[2px] xl:ml-[-13px]">
            la ciudad
          </span>
          <span className="hidden mt-[-55px] text-[55px] leading-[55px] rotate-[-0.64deg] z-[-10] absolute pl-[4px] md:hidden xl:block bg-[#FFD600] text-[#FFD600] xl:pl-[13px] pr-[31px] w-[fit-content] pb-[2px] xl:ml-[-13px]">
            la ciiudad
          </span>
          <span className="block mt-[-45px] text-[40px] leading-[40px] py-[10px] rotate-[-0.64deg] z-[-10] absolute pl-[4px] md:hidden bg-[#FFD600] text-[#FFD600] xl:pl-[13px] pr-[31px] w-[fit-content] pb-[2px] xl:ml-[-13px]">
            la ciiiiid
          </span>
        </h1>
        <h1 className="hidden md:block xl:hidden md:mt-[25px] md:w-[100%] xl:mt-[100px] font-Druk-Text-Wide font-bold mb-[21px] md:text-[40px] md:leading-[40px] xl:text-[60px] xl:leading-[60px] ">
          Un nuevo sabor esta
          <span className="hidden relative md:block whitespace-nowrap pl-[13px] pr-[31px] w-[fit-content] text-black pb-[2px] ml-[-13px]">
            en la ciudad
          </span>
          <span className="hidden md:block mt-[-47.5px] ml-[-5px] text-[60px] leading-[60px] rotate-[-0.64deg] z-[-10] absolute whitespace-nowrap bg-[#FFD600] text-[#FFD600] pl-[13px] pr-[31px] w-[fit-content] pb-[2px] ">
            en laiiiii
          </span>
        </h1>
        <p className="max-w-[310px] mb-[32px] font-Open-Sans font-normal md:text-[16px] md:leading-[22px] md:max-w-[298px] xl:text-[18px] xl:leading-[25px] opacity-40 md:mb-[46px]">Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables</p>
        <CtaButton name="Encuentranos" navigation="branchesContainer" />
      </header>
      <img src={heroHamburguer} alt="Hamburguer" className="w-[83vw] mb-[64px] md:mb-[0px] md:w-[38vw] md:max-w-[312px] md:max-h-[246px] xl:max-w-[567px] xl:max-h-[30vw]" />
    </section>
  );
}
