import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Acerca de', to: '/acercade', current: false },
  { name: 'Restaurantes', to: '/restaurantes', current: false },
  { name: 'Menú', to: '/menu', current: false },
  { name: 'Contáctanos', to: '/contactanos', current: false },
];

const homeTextColor = 'text-black';

const menuTextColor = 'text-white';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBarTailwindUI() {
  const [colorText, setColorText] = useState('');
  const [bgNav, setBgNav] = useState();
  const [openMobile, setOpenMobile] = useState(false);
  const location = useLocation();
  const [actualPage, setActualPage] = useState('home');

  useEffect(() => {
    if (location.pathname === '/menu' && !openMobile) {
      setColorText(menuTextColor);
    } else {
      setColorText(homeTextColor);
    }
    if (openMobile) {
      setBgNav('bg-[#f8f8f8] lg:bg-transparent');
    } else {
      setBgNav('bg-transparent');
    }
  }, [location, openMobile]);

  const handlePageChange = (page) => {
    if (openMobile) {
      setOpenMobile(!openMobile);
    }
    setActualPage(page);
  };
  return (
    <nav className={`rounded-b-[30px] absolute w-[100%] z-20 ${openMobile ? 'md:relative md:mb-[-100px]' : 'md:absolute'}`}>
      <div className={`${bgNav} relative flex items-center pt-[47px] md:pt-[30px] px-[16px] md:pr-[0px] md:pl-[40px] lg:pl-[0px] lg:ml-[53px] lg:pt-[0px] lg:mt-[57px] xl:max-w-[1500px] xl:pl-[101px] xl:mx-auto`}>
        <div className="absolute right-[16px] md:right-[40px] flex items-center lg:hidden">
          {/* Mobile menu button */}
          <button type="button" className="inline-flex items-center justify-center text-gray-400 focus:outline-none" onClick={() => setOpenMobile(!openMobile)}>
            <span className="sr-only">Open main menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="block h-6 w-6" aria-hidden="true" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black">
              {(openMobile) ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
          <Link
            to="/"
            className={`font-bold text-[27px] leading-[27px] mr-[47px] lg:mr-[87px] font-Druk-Text-Wide ${colorText} ${(colorText === 'text-white') ? 'lg:hover:text-[#ffffff90]' : 'lg:hover:text-[#00000075]'}`}
            onClick={() => handlePageChange('home')}
          >
            Foodies
          </Link>
          <div className="lg:flex lg:items-center hidden sm:ml-6 lg:ml-[0px] ">
            <div className="flex items-center gap-[39px]">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => handlePageChange(item.name)}
                  className={classNames(
                    item.current ? '' : `lg:text-[18px] lg:leading-[22px] lg:font-Syne lg:font-bold ${colorText} ${(colorText === 'text-white') ? 'hover:text-[#ffffff90]' : 'hover:text-[#00000075]'}`,
                    `${(actualPage === item.name) && 'underline underline-offset-[1px] decoration-[#FFD600] decoration-[6px]'}`,
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {
        openMobile
        && (
          <div className="lg:hidden bg-[#f8f8f8] z-20 lg:mb-[75px] rounded-b-[30px]">
            <div className="space-y-1 px-2 pt-2 pb-3 rounded-[30px] shadow-lg shadow-grey-50 md:pl-[53px]">
              {navigation.map((item) => (
                <button
                  type="button"
                  key={item.name}
                  className={classNames(
                    item.current ? 'font-Syne font-bold text-[25px] leading-[30px] underline underline-offset-[1px] decoration-[#FFD600] decoration-[6px]' : 'text-black font-Syne font-bold text-[25px] leading-[30px]',
                    'block px-3 py-2 text-base font-medium hover:text-[#00000050]',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <Link
                    to={item.to}
                    key={item.name}
                    onClick={() => handlePageChange(item.name)}
                    aria-current={item.current ? 'page' : undefined}
                    className={`${(actualPage === item.name) && 'underline underline-offset-[1px] decoration-[#FFD600] decoration-[6px]'}`}
                  >
                    {item.name}
                  </Link>
                </button>
              ))}
            </div>
          </div>
        )
      }
    </nav>
  );
}
