import React, { Fragment, useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Acerca de', to: '/acercade', current: false },
  { name: 'Restaurantes', to: '/restaurantes', current: false },
  { name: 'Menú', to: '/menu', current: false },
  { name: 'Contáctanos', to: '/contactanos', current: false },
];

const homeTextColor = {
  color: 'black',
};

const menuTextColor = {
  color: 'white',
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBarDeprecated() {
  const [colorText, setColorText] = useState();
  const [openMobile, setOpenMobile] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/menu' && !openMobile) {
      setColorText(menuTextColor);
    } else {
      setColorText(homeTextColor);
    }
  }, [location, openMobile]);
  return (
    <Disclosure as="nav" className="bg-[#f8f8f8] rounded-[300px]">
      {({ open }) => (
        <>
          <div className="relative flex items-center pt-[47px] mx-[16px] md:ml-[53px] lg:ml-[101px] lg:pt-[0px] lg:mt-[57px]">
            <div className="absolute right-0 flex items-center lg:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 focus:outline-none" onClick={() => setOpenMobile(!openMobile)}>
                <span className="sr-only">Open main menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="block h-6 w-6" aria-hidden="true" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black">
                  {(open) ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />) : (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  )}
                </svg>
              </Disclosure.Button>
            </div>
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
              <Link to="/" className="font-bold text-[27px] leading-[27px] mr-[47px] lg:mr-[87px] font-Druk-Text-Wide" style={colorText}>
                Foodies
              </Link>
              <div className="lg:flex lg:items-center hidden sm:ml-6 lg:ml-[0px] ">
                <div className="flex items-center gap-[39px]">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      style={colorText}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-black' : 'lg:text-[18px] lg:leading-[22px] lg:font-Syne lg:font-bold text-black hover:bg-gray-700 hover:text-white',
                        '',
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

          <Disclosure.Panel className="lg:hidden bg-[#f8f8f8] z-20 mb-[75px]">
            <div className="space-y-1 px-2 pt-2 pb-3 rounded-[30px] shadow-lg shadow-grey-50">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white font-Syne font-bold text-[25px] leading-[30px]' : 'text-black hover:bg-gray-700 hover:text-white font-Syne font-bold text-[25px] leading-[30px]',
                    'block px-3 py-2 text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <Link
                    to={item.to}
                    key={item.name}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
