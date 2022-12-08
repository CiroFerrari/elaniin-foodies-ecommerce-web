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
    <nav className="z-10 mt-[57px] ml-[101px] absolute">
      <p className="hidden">Foodies</p>
      <menu className="flex gap-[39px] items-center">
        <Link to="/" className="font-bold text-[27px] leading-[27px] mr-[86px] font-Druk-Text-Wide" style={colorText}>Foodies</Link>
        <Link to="/acercade" className="font-bold text-[18px] leading-[21.7px] font-Syne flex items-center ml-[-39px]" style={colorText}>Acerca de</Link>
        <Link to="/restaurantes" className="font-bold text-[18px] leading-[21.7px] font-Syne flex items-center" style={colorText}>Restaurantes</Link>
        <Link to="/menu" className="font-bold text-[18px] leading-[21.7px] font-Syne flex items-center" style={colorText}>Menú</Link>
        <Link to="/contactanos" className="font-bold text-[18px] leading-[21.7px] font-Syne flex items-center" style={colorText}>Contáctanos</Link>
      </menu>
    </nav>
  );
}
