import React from 'react';
import ErrorImg from '../../images/emptyStates/error-search.png';

export default function NoPage() {
  return (
    <section className="grow flex flex-col justify-center items-center min-h-[89vh]">
      <img src={ErrorImg} alt="Error search" className="max-w-[216px]" />
      <p className="font-Syne font-bold text-[20px] leading-[24px] text-[#121212] max-w-[303px] text-center mt-[23px]">¡No hemos encontrado lo que buscas!</p>
    </section>
  );
}
