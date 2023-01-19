import React, { useState, useRef, useEffect } from 'react';
import MovingComponent from 'react-moving-text';
import useOnScreen from '../../hooks/useOnScreen';
import CtaButton from '../base/CtaButton';
import useFetchData from '../../hooks/useFetchData';

const AnimationsForChaining = ['slideInFromTop'];

const baseURL = process.env.REACT_APP_API_STRAPI;
const fetchURL = '/api/home-abouts/1?populate=*';

export default function HomeAbout() {
  // CMS Upgrade
  const [content, setContent] = useState(null);
  const { result } = useFetchData(`${baseURL + fetchURL}`);

  useEffect(() => {
    if (result) {
      setContent(result.data.attributes);
    }
  }, [result]);

  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const [animationIndex, setAnimationIndex] = useState(0);
  const [animationType, setAnimationType] = useState(AnimationsForChaining[0]);

  const handleChainAnimation = () => {
    setAnimationIndex(animationIndex + 1);
    setAnimationType(animationIndex + 1);
  };
  return (
    <section ref={ref} className="mt-[52px] md:mt-[80px] flex flex-col xl:flex-row max-w-[1500px] mx-auto">
      {/* {content && <img src={`${baseURL + content.image.data.attributes.url}`} alt="alt" />} */}
      <div style={content && { backgroundImage: `url(${content.image.data.attributes.url})`, backgroundSize: 'cover', backgroundPositionX: '38%' }} className="h-[565px] mb-[60px] md:mb-[0px] px-[16px] pb-[30px] md:bg-center xl:w-[55vw] xl:max-w-[816px] flex justify-end items-end md:pr-[53px] lg:pr-[40px] md:pb-[40px] lg:pb-[61px]">
        <h2 className="text-white max-w-[343px] md:max-w-[579px] font-Druk-Text-Wide font-bold text-[35px] leading-[35px] md:text-[40px] md:leading-[40px] xl:text-[50px] xl:leading-[50px] text-right">
          {content && content.title}
          <span> </span>
          <span className="text-[#FFD600]">{content && content.titleSpan}</span>
        </h2>
      </div>
      <article
        style={content && { backgroundImage: `url(${content.contentBackground.data.attributes.url}` }}
        className="bg-cover xl:flex-1 bg-no-repeat bg-center pl-[16px] lg:bg-cover xl:bg-contain md:pt-[60px] md:pb-[60px] lg:pb-[52px] md:pl-[53px] xl:pt-[46px] xl:pb-[46px] xl:pl-[56px] flex flex-col justify-center"
      >
        {
          isVisible
          && (
            <MovingComponent
              onAnimationEnd={handleChainAnimation}
              type={animationType}
              duration="1000ms"
              timing="linear"
              fillMode="forwards"
              iteration={1}
            >
              <h3 className="mb-[27px] font-Syne font-bold text-[22px] leading-[26.4px]">{content && content.contentTitle}</h3>
              <p className="max-w-[570px] mb-[27px] font-Open-Sans font-normal text-[18px] leading-[24.5px] md:mb-[54px] text-[#00000040]">
                {content && content.contentDescription}
              </p>
              {
                content
                && (
                  <CtaButton name={content ? content.buttonText : ''} navigation="homeContact" arrowRight={content.arrowRight.data.attributes.url} />
                )
              }
            </MovingComponent>
          )
        }
      </article>
    </section>
  );
}
