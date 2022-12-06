import React from 'react';
import TestimonialsImgLeft from '../../images/homeTestimonials/testimonials-left.png';
import TestimonialsImgRight from '../../images/homeTestimonials/testimonials-right.png';
import ArrowPrev from '../../images/homeTestimonials/arrow-prev.svg';
import ArrowNext from '../../images/homeTestimonials/arrow-next.svg';

export default function Testimonials() {
  return (
    <section className="flex justify-between mt-[50px]">
      <img src={TestimonialsImgLeft} alt="Red Art" className="w-[13vw] h-[36vw] mt-[27px]" />
      <article className="flex justify-center items-center flex-col max-w-[50vw]">
        <h4 className="font-Druk-Text-Wide font-bold text-[36px] leading-[45px] text-center mb-[20px]">&quot;El mejor lugar para degustar en familia y amigos!&quot;</h4>
        <p className="font-Open-Sans font-normal text-[18px] leading-[23px] text-[#00000040] text-center mb-[61px]">
          Es el mejor lugar al que he venido con mi familia, la comida es rica,
          sirven rápido y te atienden de la mejor manera.
        </p>
        <p className="font-Syne font-bold text-[20px] leading-[21px] flex gap-[19px]">
          <img src={ArrowPrev} alt="Arrow Previous" />
          1 / 5
          <img src={ArrowNext} alt="Arrow Next" />
        </p>
      </article>
      <img src={TestimonialsImgRight} alt="Ketchup" className="w-[15vw] h-[36vw] mt-[121px]" />
    </section>
  );
}
