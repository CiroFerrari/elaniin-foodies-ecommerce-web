import React, { useState, useRef, useEffect } from 'react';
import MovingComponent from 'react-moving-text';
import useOnScreen from '../../hooks/useOnScreen';
import useFetchData from '../../hooks/useFetchData';

const baseURL = process.env.REACT_APP_API_STRAPI;
const fetchURL = '/api/home-download-apps/1?populate=*';

const AnimationsForChaining = ['slideInFromTop'];

export default function DownloadApp() {
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
    <>
      <section ref={ref} className="overflow-hidden flex flex-col items-center justify-center xl:flex-row xl:justify-start xl:items-start mt-[-227px] md:mt-[-290px] xl:mt-[-112px] max-w-[1500px] mx-auto">
        {content && <img src={baseURL + content.appImageMobile.data.attributes.url} alt={content.appImageAlt} className="md:hidden w-[608px] max-w-[508px] ml-[0px] md:w-[972px] md:max-w-[768px] md:ml-[0px] xl:ml-[0px] xl:w-[66vw] xl:max-w-[1298px] z-0" />}
        {content && <img src={baseURL + content.appImageTablet.data.attributes.url} alt={content.appImageAlt} className="hidden md:block xl:hidden w-[608px] max-w-[508px] ml-[0px] md:w-[972px] md:max-w-[768px] md:ml-[0px] xl:ml-[0px] xl:w-[66vw] xl:max-w-[1298px] z-0" />}
        {content && <img src={baseURL + content.appImageDesktop.data.attributes.url} alt={content.appImageAlt} className="hidden xl:block 2xl:ml-[-100px] w-[608px] max-w-[508px] ml-[135px] md:w-[972px] md:max-w-[700px] md:ml-[160px] xl:ml-[0px] xl:w-[66vw] xl:max-w-[1298px] z-0" />}
        {
          (isVisible && content)
          && (
            <MovingComponent
              onAnimationEnd={handleChainAnimation}
              type={animationType}
              duration="1000ms"
              timing="linear"
              fillMode="forwards"
              iteration={1}
              className=""
            >
              <article className="relative md:mt-[-60px] px-[16px] md:px-[0px] xl:mt-[200px] xl:pt-[0px] xl:ml-[-26vw] 2xl:ml-[-390px] xl:gap-[50px] flex flex-col items-center 2xl:min-w-[690px]">
                <h3 className="z-10 font-Druk-Text-Wide font-bold mt-[-50px] md:mt-[0px] px-[16px] md:px-[0px] text-[30px] leading-[38px] md:text-[35px] md:leading-[35px] text-center mb-[63px] md:mb-[57px]">
                  {content.title}
                  <span className="relative block md:p-[11px] pl-[5px] z-10">
                    {content.titleSpan}
                    <span className="downloadApp-span bg-[#FFD600] text-[#FFD600] block absolute z-[-10] mt-[-76px] rotate-[-0.64deg] md:py-[15px] md:mt-[-50px]">Descarga nuestra App</span>
                  </span>
                </h3>
                <div className="flex flex-col md:flex-row gap-[67px] md:gap-[50px]">
                  <div className="flex flex-col max-w-[320px] items-center">
                    <p className="text-center w-[46px] h-[46px] bg-[#FFD600] rounded-full flex justify-center items-center text-[18px] text-white font-bold mb-[19px] md:mb-[18px] font-Roboto">{content.pointOne}</p>
                    <p className="text-center font-Roboto font-bold text-[22px] leading-[26px] mb-[20px]">{content.titlePointOne}</p>
                    <p className="text-center font-Roboto font-normal text-[18px] leading-[21px]">
                      {content.subtitlePointOne}
                    </p>
                  </div>
                  <div className="flex flex-col max-w-[320px] items-center">
                    <p className="text-center w-[46px] h-[46px] bg-[#FFD600] rounded-full flex justify-center items-center text-[18px] text-white font-bold mb-[18px] font-Roboto">{content.pointTwo}</p>
                    <p className="text-center font-Roboto font-bold text-[22px] leading-[26px] mb-[20px]">{content.titlePointTwo}</p>
                    <p className="text-center font-Roboto font-normal text-[18px] leading-[21px]">
                      {content.subtitlePointTwo}
                    </p>
                  </div>
                </div>
                <div className="mt-[67px] md:mt-[53px] xl:mt-[0px] flex flex-col max-w-[320px] items-center">
                  <p className="text-center w-[46px] h-[46px] bg-[#FFD600] rounded-full flex justify-center items-center text-[18px] text-white font-bold mb-[18px] font-Roboto">{content.pointThree}</p>
                  <p className="text-center font-Roboto font-bold text-[22px] leading-[26px] mb-[20px]">{content.titlePointThree}</p>
                  <p className="text-center font-Roboto font-normal text-[18px] leading-[21px]">
                    {content.subtitlePointThree}
                  </p>
                </div>
                <img
                  src={baseURL + content.backgroundVectorOne.data.attributes.url}
                  alt={content.backgroundVectorOneAlt}
                  className="hidden md:block absolute z-[-10] left-[75px] bottom-[150px] w-[242px] h-[221px]"
                />
                <img
                  src={baseURL + content.backgroundVectorTwo.data.attributes.url}
                  alt={content.backgroundVectorTwoAlt}
                  className="hidden md:block absolute z-[-10] right-[75px] bottom-[150px] w-[242px] h-[221px]"
                />
              </article>
            </MovingComponent>
          )
        }
      </section>
      {
        content
        && (
          <section className="mt-[136px] gap-[18px] md:gap-[0px] md:mt-[70px] flex flex-col md:flex-row items-center justify-between xl:mt-[-96px] md:pl-[38px] md:pr-[25px] xl:pl-[10vw] xl:pr-[8vw] 2xl:mt-[-112px] max-w-[1500px] mx-auto">
            <p className="font-bold text-[24px] leading-[24px] md:mr-[86px] font-Druk-Text-Wide md:self-end text-[#00000080]">{content.appName}</p>
            <div className="flex gap-[6px] md:gap-[10px]">
              <img src={baseURL + content.appStoreImage.data.attributes.url} alt={content.appStoreImageAlt} className="max-w-[116px] max-h-[34px] md:max-w-[133px] md:max-h-[39px] xl:max-w-[184px] xl:max-h-[54px] hover:opacity-50" />
              <img src={baseURL + content.playStoreImage.data.attributes.url} alt={content.playStoreImageAlt} className="max-w-[116px] max-h-[34px] md:max-w-[133px] md:max-h-[39px] xl:max-w-[184px] xl:max-h-[54px] hover:opacity-50" />
            </div>
          </section>
        )
      }
      <hr className="mx-[25px] xl:mx-[4vw] mt-[20px] md:mt-[29px] border-b-[1px] border-b-solid border-b-[#FFC700]" />
    </>
  );
}
