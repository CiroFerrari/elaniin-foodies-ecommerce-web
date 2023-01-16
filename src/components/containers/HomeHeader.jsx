import React, { useEffect, useState } from 'react';
import MovingComponent from 'react-moving-text';
import CtaButton from '../base/CtaButton';
import useWindowSize from '../../hooks/useWindowSize';
import useFetchData from '../../hooks/useFetchData';

const AnimationsForChaining = ['slideInFromRight'];
const AnimationsForChainingBottom = ['slideInFromTop'];

const baseURL = process.env.REACT_APP_API_STRAPI;
const fetchURL = '/api/home-heroes/1?populate=*';

export default function HomeHeader() {
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
  const [title, setTitle] = useState('');
  const [titleSpan, setTitleSpan] = useState('');

  useEffect(() => {
    if (content) {
      if (windowSize.width >= 1280) {
        setHeroBackground(content.backgroundDesktop.data.attributes.url);
        setTitle(content.titleDesktop);
        setTitleSpan(content.spanDesktop);
      } else if ((windowSize.width >= 768) && (windowSize.width < 1280)) {
        setHeroBackground(content.backgroundTablet.data.attributes.url);
        setTitle(content.titleTablet);
        setTitleSpan(content.spanTablet);
      } else {
        setHeroBackground(content.backgroundMobile.data.attributes.url);
        setTitle(content.titleMobile);
        setTitleSpan(content.spanMobile);
      }
    }
  }, [content, windowSize]);

  const [animationIndex, setAnimationIndex] = useState(0);
  const [animationType, setAnimationType] = useState(AnimationsForChaining[0]);
  const [animationTypeBottom, setAnimationTypeBottom] = useState(AnimationsForChainingBottom[0]);

  const handleChainAnimation = () => {
    setAnimationIndex(animationIndex + 1);
    setAnimationType(animationIndex + 1);
    setAnimationTypeBottom(animationIndex + 1);
  };
  return (
    <section style={content && { backgroundImage: `url(${baseURL + heroBackground})` }} className="home-header ml-[9px] md:ml-[0px] xl:ml-auto bg-contain bg-no-repeat md:bg-right bg-right-top pt-[121px] flex flex-col-reverse md:flex-row items-center  md:justify-between md:pt-[127px] md:pb-[160px] md:pl-[53px] md:pr-[30px] xl:mt-[0px] xl:pt-[132px] xl:pb-[220px] xl:pl-[101px] xl:pr-[94px] max-w-[1500px] mx-auto">
      <header className="w-[343px] md:w-[350px] xl:w-[579px]">
        <MovingComponent
          onAnimationEnd={handleChainAnimation}
          type={animationType}
          duration="1000ms"
          timing="linear"
          fillMode="forwards"
          iteration={1}
        >
          {
            content
            && (
              <>
                <h1 className="text-[35px] leading-[35px] md:hidden xl:block md:mt-[25px] md:w-[100%] xl:mt-[100px] font-Druk-Text-Wide font-bold mb-[32px] md:text-[40px] md:leading-[40px] xl:text-[60px] xl:leading-[60px] ">
                  {title}
                  <span className="block relative pl-[4px] z-30 md:hidden xl:block xl:pl-[13px] pr-[31px] w-[fit-content] text-black pb-[2px] xl:ml-[-13px]">
                    {titleSpan}
                  </span>
                  <span className="hidden mt-[-55px] text-[55px] leading-[55px] rotate-[-0.64deg] z-[20] absolute pl-[4px] md:hidden xl:block bg-[#FFD600] text-[#FFD600] xl:pl-[13px] pr-[31px] w-[fit-content] pb-[2px] xl:ml-[-13px]">
                    la ciiudad
                  </span>
                  <span className="block mt-[-45px] text-[40px] leading-[40px] py-[10px] rotate-[-0.64deg] z-[-10] absolute pl-[4px] md:hidden bg-[#FFD600] text-[#FFD600] xl:pl-[13px] pr-[31px] w-[fit-content] pb-[2px] xl:ml-[-13px]">
                    la ciiiiid
                  </span>
                </h1>
                <h1 className="hidden md:block xl:hidden md:mt-[57px] md:w-[100%] xl:mt-[100px] font-Druk-Text-Wide font-bold mb-[21px] md:text-[40px] md:leading-[40px] xl:text-[60px] xl:leading-[60px] ">
                  {title}
                  <span className="hidden relative md:block whitespace-nowrap pl-[13px] pr-[31px] w-[fit-content] text-black pb-[2px] ml-[-13px]">
                    {titleSpan}
                  </span>
                  <span className="hidden md:block mt-[-47.5px] ml-[-5px] xl:text-[60px] xl:leading-[60px] md:text-[58px] md:leading-[58px]  rotate-[-0.64deg] z-[-10] absolute whitespace-nowrap bg-[#FFD600] text-[#FFD600] pl-[13px] pr-[31px] w-[fit-content] xl:pb-[2px] md:pb-[0px]">
                    en laiiiii
                  </span>
                </h1>
              </>
            )
          }
        </MovingComponent>
        <MovingComponent
          onAnimationEnd={handleChainAnimation}
          type={animationTypeBottom}
          duration="1000ms"
          timing="linear"
          fillMode="forwards"
          iteration={1}
        >
          {
            content
            && (
              <p className="max-w-[310px] mb-[32px] font-Open-Sans font-normal md:text-[16px] md:leading-[22px] md:max-w-[298px] xl:text-[18px] xl:leading-[25px] opacity-40 md:mb-[46px]">{content.subtitleParagraph}</p>
            )
          }
          {
            content
            && (
              <CtaButton name={content.buttonText} navigation="branchesContainer" />
            )
          }
        </MovingComponent>
      </header>
      {
        (content !== null)
        && (
          <>
            <img src={baseURL + content.hamburgerMobile.data.attributes.url} alt="Hamburguer" className="md:hidden w-[83vw] mb-[64px] md:mb-[0px] md:w-[38vw] md:max-w-[312px] md:max-h-[246px] xl:max-w-[567px] xl:max-h-[30vw]" />
            <img src={baseURL + content.hamburgerDesktop.data.attributes.url} alt="Hamburguer" className="hidden md:block w-[83vw] mb-[64px] md:mb-[0px] md:w-[41vw] md:max-w-[312px] md:max-h-[246px] lg:w-[38vw] xl:max-w-[567px] xl:max-h-[30vw]" />
          </>
        )
      }
    </section>
  );
}
