import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="px-[8vw] md:pl-[38px] xl:pl-[10vw] mt-[20px] md:mt-[24px] mb-[48px] bg-[#f8f8f8] max-w-[1500px] mx-auto">
      <menu className="flex flex-col items-center gap-[18px] md:grid md:grid-cols-3 md:text-center lg:flex lg:flex-row lg:flex-wrap lg:items-start lg:gap-y-[15px] lg:gap-x-[44px] font-Roboto font-normal text-[16px] leading-[28px] text-[#00000040]">
        <Link className="hover:text-[#00000080]" to="/sucursales">Conoce nuestras sucursales</Link>
        <Link className="hover:text-[#00000080]" to="/acercade">Acerca de</Link>
        <Link className="hover:text-[#00000080]" to="/sucursales">Conoce nuestras sucursales</Link>
        <Link className="hover:text-[#00000080]" to="/testimonios">¿Qué hablan de nosotros?</Link>
        <Link className="hover:text-[#00000080]" to="/contactanos">Contáctanos</Link>
      </menu>
    </footer>
  );
}
