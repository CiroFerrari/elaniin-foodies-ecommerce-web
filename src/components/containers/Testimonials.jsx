import React, { useState } from 'react';
import TestimonialsImgLeft from '../../images/homeTestimonials/testimonials-left.png';
import TestimonialsImgRight from '../../images/homeTestimonials/testimonials-right.png';
import TestimonialsImgKetchup from '../../images/homeTestimonials/testimonials-ketchup.png';
import ArrowPrev from '../../images/homeTestimonials/arrow-prev.svg';
import ArrowNext from '../../images/homeTestimonials/arrow-next.svg';

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
  const [actual, setActual] = useState(1);
  const total = testimonials.length;
  const prevTestimonial = () => {
    if (actual > 1) {
      setActual(actual - 1);
    }
  };
  const nextTestimonial = () => {
    if (actual < total) {
      setActual(actual + 1);
    }
  };
  return (
    <section className="flex justify-between mt-[50px]">
      <img src={TestimonialsImgLeft} alt="Red Art" className="w-[13vw] h-[36vw] mt-[27px]" />
      <article className="flex justify-center items-center flex-col max-w-[50vw]">
        <h4 className="font-Druk-Text-Wide font-bold text-[36px] leading-[45px] text-center mb-[20px]">
          &quot;
          {testimonials[actual - 1].title}
          &quot;
        </h4>
        <p className="font-Open-Sans font-normal text-[18px] leading-[23px] text-[#00000040] text-center mb-[61px]">
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
      <img src={TestimonialsImgKetchup} alt="Ketchup" className="absolute right-0 w-[30vw] h-[50vw] mt-[10px] z-10" />
      <img src={TestimonialsImgRight} alt="Ketchup" className="w-[15vw] h-[36vw] mt-[121px]" />
    </section>
  );
}
