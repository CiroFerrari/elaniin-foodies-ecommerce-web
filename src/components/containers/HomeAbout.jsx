import React from 'react';
import HeroAboutImg from '../../images/homeAbout/home-about.png';
import HeroAboutBackground from '../../images/homeAbout/home-about-background.png';
import CtaButton from '../base/CtaButton';

export default function HomeAbout() {
  return (
    <section className="mt-[80px] flex">
      <div style={{ backgroundImage: `url(${HeroAboutImg})`, backgroundSize: 'cover' }} className="h-[565px] w-[55vw] flex justify-end items-end pr-[40px] pb-[61px]">
        <h2 className="text-white max-w-[579px] font-Druk-Text-Wide font-bold text-[50px] leading-[50px] text-right">
          LA COMIDA ES
          <span className="text-[#FFD600]"> NUESTRO ARTE</span>
        </h2>
      </div>
      <article
        style={{
          backgroundImage: `url(${HeroAboutBackground})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPositionY: 'center',
        }}
        className="pt-[46px] pb-[70px] pl-[56px] flex flex-col justify-center"
      >
        <h3 className="mb-[27px] font-Syne font-bold text-[22px] leading-[26.4px]">¿Quién es Foodies?</h3>
        <p className="max-w-[570px] font-Open-Sans font-normal text-[18px] leading-[24.5px] mb-[54px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Temporibus possimus modi, quae id, laborum aliquam,
          veniam omnis voluptatem dicta quisquam fugiat.
          Obcaecati provident, vero excepturi dolores iste explicabo quibusdam nisi.
        </p>
        <CtaButton name="Contáctanos" />
      </article>
    </section>
  );
}
