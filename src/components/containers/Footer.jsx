import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="px-[8vw] mt-[24px] mb-[48px] bg-[#f8f8f8] max-w-[1500px] mx-auto">
      <menu className="flex gap-[44px] font-Roboto font-normal text-[16px] leading-[28px] text-[#00000040]">
        <Link to="/sucursales">Conoce nuestras sucursales</Link>
        <Link to="/acercade">Acerca de</Link>
        <Link to="/sucursales">Conoce nuestras sucursales</Link>
        <Link to="/testimonios">¿Qué hablan de nosotros?</Link>
        <Link to="/contactanos">Contáctanos</Link>
      </menu>
    </footer>
  );
}
