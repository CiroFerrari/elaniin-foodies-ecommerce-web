import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';

const baseURL = process.env.REACT_APP_API_STRAPI;
const fetchURL = '/api/footers/1';

export default function Footer() {
  // CMS Upgrade
  const [content, setContent] = useState(null);
  const { result } = useFetchData(`${baseURL + fetchURL}`);

  useEffect(() => {
    if (result) {
      setContent(result.data.attributes);
    }
  }, [result]);

  return (
    <footer className="px-[8vw] md:pl-[38px] xl:pl-[10vw] mt-[20px] md:mt-[24px] mb-[48px] bg-[#f8f8f8] max-w-[1500px] mx-auto">
      <menu className="flex flex-col items-center gap-[18px] md:grid md:grid-cols-3 md:text-center lg:flex lg:flex-row lg:flex-wrap lg:items-start lg:gap-y-[15px] lg:gap-x-[44px] font-Roboto font-normal text-[16px] leading-[28px] text-[#00000040]">
        {
          content
          && (
            content.navigationLinks.map((item) => (
              <Link key={item.name} className="hover:text-[#00000080]" to={item.to}>{item.name}</Link>
            ))
          )
        }
      </menu>
    </footer>
  );
}
