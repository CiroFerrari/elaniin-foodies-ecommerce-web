import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const homeTextColor = {
  color: 'black',
};

const menuTextColor = {
  color: 'white',
};

export default function NavBar({ page }) {
  const colorText = page === 'menu' ? menuTextColor : homeTextColor;
  return (
    <>
      <p className="hidden">Foodies</p>
      <menu className="flex gap-[39px] h-16 items-center">
        <Link to="/" className="font-bold text-[27px] leading-[27px] mr-[86px] font-Druk-Text-Wide" style={colorText}>Foodies</Link>
        <Link to="/acercade" className="font-bold text-[18px] leading-[21.7px] font-Syne flex items-center ml-[-39px]" style={colorText}>Acerca de</Link>
        <Link to="/restaurantes" className="font-bold text-[18px] leading-[21.7px] font-Syne flex items-center" style={colorText}>Restaurantes</Link>
        <Link to="/menu" className="font-bold text-[18px] leading-[21.7px] font-Syne flex items-center" style={colorText}>Menú</Link>
        <Link to="/contactanos" className="font-bold text-[18px] leading-[21.7px] font-Syne flex items-center" style={colorText}>Contáctanos</Link>
      </menu>
    </>
  );
}

NavBar.propTypes = {
  page: PropTypes.string.isRequired,
};
