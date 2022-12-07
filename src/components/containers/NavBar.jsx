import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <p className="hidden">Foodies</p>
      <menu className="flex gap-[39px] h-16 items-center">
        <Link to="/" className="font-bold text-[27px] leading-[27px] mr-[86px] font-Druk-Text-Wide">Foodies</Link>
        <Link to="/acercade" className="font-bold text-[18px] leading-[21.7px] font-Syne flex items-center ml-[-39px]">Acerca de</Link>
        <Link to="/restaurantes" className="font-bold text-[18px] leading-[21.7px] font-Syne flex items-center">Restaurantes</Link>
        <Link to="/menu" className="font-bold text-[18px] leading-[21.7px] font-Syne flex items-center">Menú</Link>
        <Link to="/contactanos" className="font-bold text-[18px] leading-[21.7px] font-Syne flex items-center">Contáctanos</Link>
      </menu>
    </>
  );
}
