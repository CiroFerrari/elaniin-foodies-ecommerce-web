import React, { useState, useEffect } from 'react';
import MovingComponent from 'react-moving-text';
import useFetchData from '../../hooks/useFetchData';
import useWindowSize from '../../hooks/useWindowSize';

const baseURL = process.env.REACT_APP_API_STRAPI;
const fetchURL = '/api/menu-heroes/1?populate=*';

const AnimationsForChaining = ['slideInFromRight'];

export default function MenuHeader() {
  // CMS Upgrade
  const [content, setContent] = useState(null);
  const { result } = useFetchData(`${baseURL + fetchURL}`);

  useEffect(() => {
    if (result) {
      setContent(result.data.attributes);
    }
  }, [result]);

  const windowSize = useWindowSize();
  const [heroBackground, setHeroBackground] = useState({});

  useEffect(() => {
    if (content) {
      if (windowSize.width >= 768) {
        setHeroBackground(content.backgroundDesktop.data.attributes.url);
      } else {
        setHeroBackground(content.backgroundMobile.data.attributes.url);
      }
    }
  }, [content, windowSize]);

  const [animationIndex, setAnimationIndex] = useState(0);
  const [animationType, setAnimationType] = useState(AnimationsForChaining[0]);

  const handleChainAnimation = () => {
    setAnimationIndex(animationIndex + 1);
    setAnimationType(animationIndex + 1);
  };
  return (
    content
      ? (
        <section className="menu-header mt-[0px] flex flex-col-reverse md:flex-row md:pl-[53px] md:pb-[90px] xl:pb-[0px] justify-between bg-black md:pt-[72px] xl:pt-[132px] lg:pl-[101px] lg:pr-[94px] max-w-[1500px] mx-auto xl:mt-[-60px] bg-no-repeat" style={content && { backgroundImage: `url(${heroBackground})` }}>
          <header className="max-w-[343px] md:max-w-[360px] lg:max-w-[579px] self-center mb-[106px] md:mb-[0px]">
            <MovingComponent
              onAnimationEnd={handleChainAnimation}
              type={animationType}
              duration="2000ms"
              timing="linear"
              fillMode="forwards"
              iteration={1}
            >
              {
                content
                && (
                  <h1 className="mt-[52px]  lg:mt-[185px] font-Druk-Text-Wide font-bold text-[35px] leading-[35px] md:text-[40px] md:leading-[40px] lg:text-[60px] lg:leading-[60px] md:mb-[21px] text-white">
                    {content.title}
                    <span className="block relative z-20 pr-[26px] w-[fit-content]  text-black pb-[2px]">
                      {content.titleSpan}
                      <span className="block absolute mt-[-41px] py-[10px] md:mt-[-40px] lg:mt-[-55px] md:left-[-5px] lg:py-[0px] z-[-10] rotate-[-0.64deg] bg-[#FFD600] text-left w-[fit-content] text-[#FFD600] pb-[2px]"> expiiiiiiiencia</span>
                    </span>
                  </h1>
                )
              }
            </MovingComponent>
          </header>
          <img src={content.mainImage.data.attributes.url} alt="Hamburguer" className="w-[87vw] mt-[121px] ml-[-11px] self-center max-w-[328px] md:w-[42vw] md:max-w-[627px] md:mt-[40px] md:ml-[0px]" />
        </section>
      )
      : (
        <p>Cargando</p>
      )
  );
}
