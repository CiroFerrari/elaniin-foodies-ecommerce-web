import React from 'react';
import { Link } from 'react-router-dom';
import ResponseOk from '../../images/homeContact/response-ok.png';

export default function HomeContactOk() {
  return (
    <section
      className="flex flex-col items-center pt-[94px] pb-[273px] md:pb-[323px] xl:pb-[120px] bg-[#000000]"
    >
      <img
        src={ResponseOk}
        alt="Mail"
        className="w-[150px] mb-[61px] lg:w-[158px] md:mb-[50px]"
      />
      <p
        className="font-bold font-Druk-Text-Wide text-[36px] leading-[36px] text-center text-white mb-[20px] md:mb-[17px]"
      >
        Gracias por tus comentarios
      </p>
      <p
        className="font-normal font-Open-Sans text-[24px] leading-[32px] text-center text-white mb-[32px] md:mb-[34px] max-w-[698px]"
      >
        Don&apos;t miss out on our great offers & Receive deals from all our
        top restaurants via e-mail.
      </p>
      <Link
        to="/menu"
        className="bg-[#FFD600] rounded-[4px] px-[20px] py-[14px] font-Open-Sans font-bold text-[16px] leading-[22px]"
      >
        Conoce nuestro menu
      </Link>
    </section>
  );
}
