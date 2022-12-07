import React from 'react';
import heroHamburguer from '../../images/heroImages/hero-hamburger.png';
import CtaButton from '../base/CtaButton';

export default function Header() {
  return (
    <div className="flex justify-between pb-[185px]">
      <header className="max-w-[38vw]">
        <h1 className="mt-[185px] font-Druk-Text-Wide font-bold text-[60px] leading-[60px] mb-[21px]">Un nuevo sabor esta en la ciudad</h1>
        <p className="font-Open-Sans font-normal text-[18px] leading-[25px] opacity-40 mb-[46px]">Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables</p>
        <CtaButton name="Encuentranos" />
      </header>
      <img src={heroHamburguer} alt="Hamburguer" className="max-w-[38vw]" />
    </div>
  );
}
