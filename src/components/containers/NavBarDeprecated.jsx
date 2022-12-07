import React, { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';

const navigation = [
  { name: 'Acerca de', href: '#', current: true },
  { name: 'Restaurantes', href: '#', current: false },
  { name: 'Menú', href: '#', current: false },
  { name: 'Contáctanos', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBarDeprecated() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="relative flex h-16 items-center">
            <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="block h-6 w-6" aria-hidden="true" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  {(open) ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />) : (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  )}
                </svg>
              </Disclosure.Button>
            </div>
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
              <p className="font-bold text-[27px] leading-[27px] mr-[47px] font-Druk-Text-Wide">
                Foodies
              </p>
              <div className="hidden sm:ml-6 lg:block">
                <div className="flex space-x-4 gap-[39px]">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'font-bold text-[18px] leading-[21.7px] font-Syne flex items-center' : 'font-bold text-[18px] leading-[21.7px] font-Syne flex items-center',
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
