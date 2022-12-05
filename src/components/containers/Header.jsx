import React from 'react';
import arrowRight from '../../images/heroImages/arrow-right.svg';
import heroHamburguer from '../../images/heroImages/hero-hamburger.png';

export default function Header() {
  return (
    <div className="flex justify-between">
      <header className="max-w-[38vw]">
        <h1 className="mt-[185px] font-Druk-Text-Wide font-bold text-[60px] leading-[60px] mb-[21px]">Un nuevo sabor esta en la ciudad</h1>
        <p className="font-Open-Sans font-normal text-[18px] leading-[25px] opacity-40 mb-[46px]">Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables</p>
        <button className="flex font-Syne font-bold text-[22px] leading-[26px] gap-[12px] items-center" type="submit">
          Encuentranos
          <img src={arrowRight} alt="Arrow right" />
        </button>
      </header>
      <img src={heroHamburguer} alt="Hamburguer" className="max-w-[38vw]" />
    </div>
  );
}
