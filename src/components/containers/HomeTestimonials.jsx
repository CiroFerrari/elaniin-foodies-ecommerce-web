import React, { useState, useRef } from 'react';
import MovingComponent from 'react-moving-text';
import useOnScreen from '../../hooks/useOnScreen';
import TestimonialsImgLeft from '../../images/homeTestimonials/testimonials-left.png';
import TestimonialsImgRight from '../../images/homeTestimonials/testimonials-right.png';
import TestimonialsImgKetchup from '../../images/homeTestimonials/testimonials-ketchup.webp';
import ArrowPrev from '../../images/homeTestimonials/arrow-prev.svg';
import ArrowNext from '../../images/homeTestimonials/arrow-next.svg';

const AnimationsForChaining = ['slideInFromTop'];

const testimonials = [
  {
    title: 'El mejor lugar para degustar en familia y amigos!',
    description: 'Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera.',
  },
  {
    title: 'Testimonio 2',
    description: 'Descripción 2',
  },
  {
    title: 'Testimonio 3',
    description: 'Descripción 3',
  },
  {
    title: 'Testimonio 4',
    description: 'Descripción 4',
  },
  {
    title: 'Testimonio 5',
    description: 'Descripción 5',
  },
];

export default function Testimonials() {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const [animationIndex, setAnimationIndex] = useState(0);
  const [animationType, setAnimationType] = useState(AnimationsForChaining[0]);

  const handleChainAnimation = () => {
    setAnimationIndex(animationIndex + 1);
    setAnimationType(animationIndex + 1);
  };

  const [actual, setActual] = useState(1);
  const total = testimonials.length;
  const prevTestimonial = () => {
    if (actual > 1) {
      setActual(actual - 1);
    } else if (actual === 1) {
      setActual(total);
    }
  };
  const nextTestimonial = () => {
    if (actual < total) {
      setActual(actual + 1);
    } else if (actual === total) {
      setActual(1);
    }
  };
  return (
    <section ref={ref} className="relative flex justify-center items-start px-[16px] md:px-[0px] mt-[55px] md:h-[633px] xl:justify-between md:mt-[9px] xl:mt-[50px] max-w-[1500px] mx-auto">
      <img src={TestimonialsImgLeft} alt="Red Art" className="hidden md:block absolute left-0 self-start xl:static md:w-[140px] md:h-[436px] xl:w-[13vw] xl:max-w-[195px] xl:h-[36vw] xl:max-h-[546px] xl:mt-[27px]" />
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
            className="self-end"
          >
            <article className="z-10 self-end flex flex-col items-center justify-end pb-[67px] md:pb-[220px] lg:pb-[200px] xl:pb-[180px] md:w-[612px] xl:w-[50vw] xl:max-w-[744px]">
              <h4 className="font-Druk-Text-Wide font-bold text-[20px] leading-[25px] md:text-[30px] md:leading-[38px] xl:text-[36px] xl:leading-[45px] text-center mb-[10px] md:mb-[20px]">
                &quot;
                {testimonials[actual - 1].title}
                &quot;
              </h4>
              <p className="font-Open-Sans font-normal text-[18px] leading-[23px] text-[#00000040] text-center mb-[35px] md:mb-[61px]">
                {testimonials[actual - 1].description}
              </p>
              <p className="font-Syne font-bold text-[20px] leading-[21px] flex gap-[19px]">
                <button type="button" onClick={prevTestimonial}>
                  <img src={ArrowPrev} alt="Arrow Previous" />
                </button>
                {actual}
                <span className="mx-[-12px]">/</span>
                {total}
                <button type="button" onClick={nextTestimonial}>
                  <img src={ArrowNext} alt="Arrow Next" />
                </button>
              </p>
            </article>
          </MovingComponent>
        )
      }
      <img src={TestimonialsImgKetchup} alt="Ketchup" className="ketchup-img hidden xl:block absolute right-0 w-[30vw] max-w-[457px] h-[50vw] max-h-[762px] xl:mt-[-20px] z-10" />
      <img src={TestimonialsImgRight} alt="Ketchup Stain" className="hidden md:block absolute right-0 self-end md:w-[165px] md:h-[474px] xl:static xl:w-[15vw] xl:max-w-[223px] xl:h-[36vw] xl:max-h-[546px] xl:mt-[121px]" />
    </section>
  );
}
