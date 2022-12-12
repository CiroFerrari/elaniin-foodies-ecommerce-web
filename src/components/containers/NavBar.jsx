import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const homeTextColor = {
  color: 'black',
};

const menuTextColor = {
  color: 'white',
};

export default function NavBar() {
  const [colorText, setColorText] = useState();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/menu') {
      setColorText(menuTextColor);
    } else {
      setColorText(homeTextColor);
    }
  }, [location]);
  return (
    <section className="max-w-[1500px] mx-auto">
      <nav className="z-10 mt-[47px] ml-[16px] md:mt-[57px] md:ml-[53px] xl:ml-[101px]">
        <Link to="/" className="lg:hidden font-bold text-[27px] leading-[27px] mr-[86px] font-Druk-Text-Wide" style={colorText}>Foodies</Link>
        <menu className="gap-[39px] items-center hidden lg:flex">
          <Link to="/" className="font-bold text-[27px] leading-[27px] mr-[86px] font-Druk-Text-Wide" style={colorText}>Foodies</Link>
          <Link to="/acercade" className="font-bold text-[18px] leading-[21.7px] font-Syne flex items-center ml-[-39px]" style={colorText}>Acerca de</Link>
          <Link to="/restaurantes" className="font-bold text-[18px] leading-[21.7px] font-Syne flex items-center" style={colorText}>Restaurantes</Link>
          <Link to="/menu" className="font-bold text-[18px] leading-[21.7px] font-Syne flex items-center" style={colorText}>Menú</Link>
          <Link to="/contactanos" className="font-bold text-[18px] leading-[21.7px] font-Syne flex items-center" style={colorText}>Contáctanos</Link>
        </menu>
      </nav>
    </section>
  );
}
