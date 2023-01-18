import React, { useEffect, useState } from 'react';
import useFetchData from '../../hooks/useFetchData';

const baseURL = process.env.REACT_APP_API_STRAPI;
const fetchURL = '/api/no-pages/1?populate=*';

export default function NoPage() {
  // CMS Upgrade
  const [content, setContent] = useState(null);
  const { result } = useFetchData(`${baseURL + fetchURL}`);

  useEffect(() => {
    if (result) {
      setContent(result.data.attributes);
    }
  }, [result]);

  useEffect(() => {
    document.title = 'Foodies';
  }, []);
  return (
    <section className="grow flex flex-col justify-center items-center min-h-[89vh]">
      {
        content
        && (
          <>
            <img src={content.noPageImage.data.attributes.url} alt={content.noPageImageAlt} className="max-w-[216px]" />
            <p className="font-Syne font-bold text-[20px] leading-[24px] text-[#121212] max-w-[303px] text-center mt-[23px]">{content.text}</p>
          </>
        )
      }
    </section>
  );
}
