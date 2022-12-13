import React from 'react';
import HeroAboutImg from '../../images/homeAbout/home-about.png';
import HeroAboutBackground from '../../images/homeAbout/home-about-background.png';
import CtaButton from '../base/CtaButton';

export default function HomeAbout() {
  return (
    <section className="mt-[52px] md:mt-[80px] flex flex-col xl:flex-row max-w-[1500px] mx-auto">
      <div style={{ backgroundImage: `url(${HeroAboutImg})`, backgroundSize: 'cover', backgroundPositionX: '38%' }} className="h-[565px] mb-[60px] md:mb-[0px] px-[16px] pb-[30px] md:bg-center xl:w-[55vw] xl:max-w-[816px] flex justify-end items-end md:pr-[40px] md:pb-[61px]">
        <h2 className="text-white max-w-[343px] md:max-w-[579px] font-Druk-Text-Wide font-bold text-[37px] leading-[37px] md:text-[40px] md:leading-[40px] xl:text-[50px] xl:leading-[50px] text-right">
          LA COMIDA ES
          <span className="text-[#FFD600]"> NUESTRO ARTE</span>
        </h2>
      </div>
      <article
        style={{
          backgroundImage: `url(${HeroAboutBackground})`,
        }}
        className="bg-contain bg-no-repeat bg-center pl-[16px] lg:bg-cover xl:bg-contain md:pt-[60px] md:pb-[52px] md:pl-[53px] xl:pt-[46px] xl:pb-[70px] xl:pl-[56px] flex flex-col justify-center"
      >
        <h3 className="mb-[27px] font-Syne font-bold text-[22px] leading-[26.4px]">¿Quién es Foodies?</h3>
        <p className="max-w-[570px] mb-[27px] font-Open-Sans font-normal text-[18px] leading-[24.5px] md:mb-[54px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Temporibus possimus modi, quae id, laborum aliquam,
          veniam omnis voluptatem dicta quisquam fugiat.
          Obcaecati provident, vero excepturi dolores iste explicabo quibusdam nisi.
        </p>
        <CtaButton name="Contáctanos" navigation="homeContact" />
      </article>
    </section>
  );
}
