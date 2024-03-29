import React, { useState, useRef } from 'react';
import MovingComponent from 'react-moving-text';
import useOnScreen from '../../hooks/useOnScreen';
import HeroAboutImg from '../../images/homeAbout/home-about.webp';
import HeroAboutBackground from '../../images/homeAbout/md-background.png';
import CtaButton from '../base/CtaButton';

const AnimationsForChaining = ['slideInFromTop'];

export default function HomeAbout() {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const [animationIndex, setAnimationIndex] = useState(0);
  const [animationType, setAnimationType] = useState(AnimationsForChaining[0]);

  const handleChainAnimation = () => {
    setAnimationIndex(animationIndex + 1);
    setAnimationType(animationIndex + 1);
  };
  return (
    <section ref={ref} className="mt-[52px] md:mt-[80px] flex flex-col xl:flex-row max-w-[1500px] mx-auto">
      <div style={{ backgroundImage: `url(${HeroAboutImg})`, backgroundSize: 'cover', backgroundPositionX: '38%' }} className="h-[565px] mb-[60px] md:mb-[0px] px-[16px] pb-[30px] md:bg-center xl:w-[55vw] xl:max-w-[816px] flex justify-end items-end md:pr-[53px] lg:pr-[40px] md:pb-[40px] lg:pb-[61px]">
        <h2 className="text-white max-w-[343px] md:max-w-[579px] font-Druk-Text-Wide font-bold text-[35px] leading-[35px] md:text-[40px] md:leading-[40px] xl:text-[50px] xl:leading-[50px] text-right">
          LA COMIDA ES
          <span className="text-[#FFD600]"> NUESTRO ARTE</span>
        </h2>
      </div>
      <article
        style={{
          backgroundImage: `url(${HeroAboutBackground})`,
        }}
        className="bg-cover xl:flex-1 bg-no-repeat bg-center pl-[16px] lg:bg-cover xl:bg-contain md:pt-[60px] md:pb-[60px] lg:pb-[52px] md:pl-[53px] xl:pt-[46px] xl:pb-[46px] xl:pl-[56px] flex flex-col justify-center"
      >
        {
          isVisible
          && (
            <MovingComponent
              onAnimationEnd={handleChainAnimation}
              type={animationType}
              duration="1000ms"
              timing="linear"
              fillMode="forwards"
              iteration={1}
            >
              <h3 className="mb-[27px] font-Syne font-bold text-[22px] leading-[26.4px]">¿Quién es Foodies?</h3>
              <p className="max-w-[570px] mb-[27px] font-Open-Sans font-normal text-[18px] leading-[24.5px] md:mb-[54px] text-[#00000040]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Temporibus possimus modi, quae id, laborum aliquam,
                veniam omnis voluptatem dicta quisquam fugiat.
                Obcaecati provident, vero excepturi dolores iste explicabo quibusdam nisi.
              </p>
              <CtaButton name="Contáctanos" navigation="homeContact" />
            </MovingComponent>
          )
        }
      </article>
    </section>
  );
}
