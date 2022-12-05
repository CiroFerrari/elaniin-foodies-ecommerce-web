import React from 'react';

export default function NavBar2() {
  return (
    <>
      <p className="hidden">Foodies</p>
      <menu className="flex gap-[39px]">
        <li className="font-bold text-[27px] leading-[27px] mr-[86px] font-Druk-Text-Wide">Foodies</li>
        <li className="font-bold text-[18px] leading-[21.7px] font-Syne flex items-center ml-[-39px]">Acerca de</li>
        <li className="font-bold text-[18px] leading-[21.7px] font-Syne flex items-center">Restaurantes</li>
        <li className="font-bold text-[18px] leading-[21.7px] font-Syne flex items-center">Menú</li>
        <li className="font-bold text-[18px] leading-[21.7px] font-Syne flex items-center">Contáctanos</li>
      </menu>
    </>

  );
}
