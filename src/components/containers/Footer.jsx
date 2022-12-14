import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="px-[8vw] mt-[20px] md:mt-[24px] mb-[48px] bg-[#f8f8f8] max-w-[1500px] mx-auto">
      <menu className="flex flex-col items-center gap-[18px] md:flex-row md:items-start md:gap-[44px] font-Roboto font-normal text-[16px] leading-[28px] text-[#00000040]">
        <Link className="hover:text-[#00000080]" to="/sucursales">Conoce nuestras sucursales</Link>
        <Link className="hover:text-[#00000080]" to="/acercade">Acerca de</Link>
        <Link className="hover:text-[#00000080]" to="/sucursales">Conoce nuestras sucursales</Link>
        <Link className="hover:text-[#00000080]" to="/testimonios">¿Qué hablan de nosotros?</Link>
        <Link className="hover:text-[#00000080]" to="/contactanos">Contáctanos</Link>
      </menu>
    </footer>
  );
}
