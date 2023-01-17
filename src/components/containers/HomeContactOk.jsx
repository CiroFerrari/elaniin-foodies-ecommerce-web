import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';

const baseURL = process.env.REACT_APP_API_STRAPI;
const fetchURL = '/api/home-contact-oks/1?populate=*';

export default function HomeContactOk() {
  // CMS Upgrade
  const [content, setContent] = useState(null);
  const { result } = useFetchData(`${baseURL + fetchURL}`);

  useEffect(() => {
    if (result) {
      setContent(result.data.attributes);
    }
  }, [result]);

  return (
    <section
      className="flex flex-col items-center md:mt-[-50px] pt-[94px] pb-[273px] md:pb-[323px] xl:pb-[120px] bg-[#000000]"
    >
      {
        content && (
          <>
            <img
              src={baseURL + content.imageOK.data.attributes.url}
              alt="Mail"
              className="w-[150px] mb-[61px] lg:w-[158px] md:mb-[50px]"
            />
            <p
              className="font-bold font-Druk-Text-Wide text-[36px] leading-[36px] text-center text-white mb-[20px] md:mb-[17px]"
            >
              {content.title}
            </p>
            <p
              className="font-normal font-Open-Sans text-[24px] leading-[32px] text-center text-white mb-[32px] md:mb-[34px] max-w-[698px]"
            >
              {content.subtitle}
            </p>
            <Link
              to="/menu"
              className="bg-[#FFD600] rounded-[4px] px-[20px] py-[14px] font-Open-Sans font-bold text-[16px] leading-[22px]"
            >
              {content.buttonText}
            </Link>
          </>
        )
      }
    </section>
  );
}
