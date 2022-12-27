import React, { useState, useRef } from 'react';
import MovingComponent from 'react-moving-text';
import useOnScreen from '../../hooks/useOnScreen';
import DownloadAppImg from '../../images/homeDownloadApp/app-image.webp';
import DownloadAppMDImg from '../../images/homeDownloadApp/app-image-md.png';
import AppStoreImg from '../../images/homeDownloadApp/app-store.png';
import PlayStoreImg from '../../images/homeDownloadApp/play-store.png';
import Vector2 from '../../images/homeDownloadApp/vector-2.png';
import Vector1 from '../../images/homeDownloadApp/vector-1.png';

const AnimationsForChaining = ['slideInFromTop'];

export default function DownloadApp() {
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
      <section ref={ref} className="overflow-hidden flex flex-col items-center justify-center xl:flex-row xl:justify-start mt-[-227px] md:mt-[-290px] xl:mt-[-112px] max-w-[1500px] mx-auto">
        <img src={DownloadAppImg} alt="Foodies App" className="hidden xl:block 2xl:ml-[-100px] w-[608px] max-w-[508px] ml-[135px] md:w-[972px] md:max-w-[700px] md:ml-[160px] xl:ml-[0px] xl:w-[66vw] xl:max-w-[1298px] z-0" />
        <img src={DownloadAppMDImg} alt="Foodies App" className="xl:hidden w-[608px] max-w-[508px] ml-[0px] md:w-[972px] md:max-w-[768px] md:ml-[0px] xl:ml-[0px] xl:w-[66vw] xl:max-w-[1298px] z-0" />
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
              className=""
            >
              <article className="relative md:mt-[-60px] xl:mt-[0px] px-[16px] md:px-[0px] xl:pt-[200px] xl:ml-[-26vw] 2xl:ml-[-390px] xl:gap-[50px] flex flex-col items-center 2xl:min-w-[690px]">
                <h3 className="z-10 font-Druk-Text-Wide font-bold mt-[-50px] md:mt-[0px] px-[16px] md:px-[0px] text-[30px] leading-[38px] md:text-[35px] md:leading-[35px] text-center mb-[63px] md:mb-[57px]">
                  Obten mas beneficios
                  <span className="relative block md:p-[11px] pl-[5px] z-10">
                    Descarga nuestra App
                    <span className="downloadApp-span bg-[#FFD600] text-[#FFD600] block absolute z-[-10] mt-[-76px] rotate-[-0.64deg] md:py-[15px] md:mt-[-50px]">Descarga nuestra App</span>
                  </span>
                </h3>
                <div className="flex flex-col md:flex-row gap-[67px] md:gap-[50px]">
                  <div className="flex flex-col max-w-[320px] items-center">
                    <p className="text-center w-[46px] h-[46px] bg-[#FFD600] rounded-full flex justify-center items-center text-[18px] text-white font-bold mb-[19px] md:mb-[18px] font-Roboto">01</p>
                    <p className="text-center font-Roboto font-bold text-[22px] leading-[26px] mb-[20px]">Solicita rápido</p>
                    <p className="text-center font-Roboto font-normal text-[18px] leading-[21px]">
                      Curabitur in eleifend turpis, id vehicula odio.
                      Donec pulvinar tellus eget magna aliquet ultricies.
                    </p>
                  </div>
                  <div className="flex flex-col max-w-[320px] items-center">
                    <p className="text-center w-[46px] h-[46px] bg-[#FFD600] rounded-full flex justify-center items-center text-[18px] text-white font-bold mb-[18px] font-Roboto">02</p>
                    <p className="text-center font-Roboto font-bold text-[22px] leading-[26px] mb-[20px]">Fácil de usar</p>
                    <p className="text-center font-Roboto font-normal text-[18px] leading-[21px]">
                      Curabitur in eleifend turpis, id vehicula odio.
                      Donec pulvinar tellus eget magna aliquet ultricies.
                    </p>
                  </div>
                </div>
                <div className="mt-[67px] md:mt-[53px] xl:mt-[0px] flex flex-col max-w-[320px] items-center">
                  <p className="text-center w-[46px] h-[46px] bg-[#FFD600] rounded-full flex justify-center items-center text-[18px] text-white font-bold mb-[18px] font-Roboto">03</p>
                  <p className="text-center font-Roboto font-bold text-[22px] leading-[26px] mb-[20px]">Promociones especiales</p>
                  <p className="text-center font-Roboto font-normal text-[18px] leading-[21px]">
                    Curabitur in eleifend turpis, id vehicula odio.
                    Donec pulvinar tellus eget magna aliquet ultricies.
                  </p>
                </div>
                <img
                  src={Vector1}
                  alt="Vector 1"
                  className="hidden md:block absolute z-[-10] left-[75px] bottom-[150px] w-[242px] h-[221px]"
                />
                <img
                  src={Vector2}
                  alt="Vector 2"
                  className="hidden md:block absolute z-[-10] right-[75px] bottom-[150px] w-[242px] h-[221px]"
                />
              </article>
            </MovingComponent>
          )
        }
      </section>
      <section className="mt-[136px] gap-[18px] md:gap-[0px] md:mt-[70px] flex flex-col md:flex-row items-center justify-between xl:mt-[0px] px-[8vw] 2xl:mt-[-112px] max-w-[1500px] mx-auto">
        <p className="font-bold text-[24px] leading-[24px] md:mr-[86px] font-Druk-Text-Wide md:self-end text-[#00000080]">Foodies</p>
        <div className="flex gap-[6px] md:gap-[10px]">
          <img src={AppStoreImg} alt="App Store" className="max-w-[116px] max-h-[34px] md:max-w-[133px] md:max-h-[39px] xl:max-w-[184px] xl:max-h-[54px] hover:opacity-50" />
          <img src={PlayStoreImg} alt="Play Store" className="max-w-[116px] max-h-[34px] md:max-w-[133px] md:max-h-[39px] xl:max-w-[184px] xl:max-h-[54px] hover:opacity-50" />
        </div>
      </section>
      <hr className="mx-[4vw] mt-[20px] md:mt-[29px] border-b-[1px] border-b-solid border-b-[#FFC700]" />
    </>
  );
}
