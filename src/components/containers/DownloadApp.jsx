import React from 'react';
import DownloadAppImg from '../../images/homeDownloadApp/app-image.png';
import AppStoreImg from '../../images/homeDownloadApp/app-store.png';
import PlayStoreImg from '../../images/homeDownloadApp/play-store.png';
import Vector2 from '../../images/homeDownloadApp/vector-2.png';
import Vector1 from '../../images/homeDownloadApp/vector-1.png';

export default function DownloadApp() {
  return (
    <>
      <section className="overflow-hidden flex flex-col items-center justify-center xl:flex-row mt-[-227px] md:mt-[-305px] xl:mt-[-112px] max-w-[1500px] mx-auto">
        <img src={DownloadAppImg} alt="Foodies App" className="w-[608px] max-w-[508px] ml-[135px] md:w-[972px] md:ml-[135px] xl:ml-[0px] xl:w-[66vw] xl:max-w-[1298px] z-0" />
        <article className="relative px-[16px] md:px-[0px] xl:pt-[200px] xl:ml-[-26vw] 2xl:ml-[-390px] xl:gap-[50px] flex flex-col items-center">
          <h3 className="font-Druk-Text-Wide font-bold mt-[-50px] md:mt-[0px] px-[16px] md:px-[0px] text-[30px] leading-[38px] md:text-[35px] md:leading-[35px] text-center mb-[63px] md:mb-[57px]">
            Obten mas beneficios
            <span className="bg-[#FFD600] block md:p-[11px] pl-[5px] z-0 mt-[-11px]">Descarga nuestra App</span>
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
      </section>
      <section className="mt-[136px] gap-[18px] md:gap-[0px] md:mt-[70px] flex flex-col md:flex-row items-center justify-between px-[8vw] 2xl:mt-[-112px] max-w-[1500px] mx-auto">
        <p className="font-bold text-[24px] leading-[24px] md:mr-[86px] font-Druk-Text-Wide md:self-end text-[#00000080]">Foodies</p>
        <div className="flex gap-[6px] md:gap-[10px]">
          <img src={AppStoreImg} alt="App Store" className="max-w-[116px] max-h-[34px] md:max-w-[184px] md:max-h-[54px]" />
          <img src={PlayStoreImg} alt="Play Store" className="max-w-[116px] max-h-[34px] md:max-w-[184px] md:max-h-[54px]" />
        </div>
      </section>
      <hr className="mx-[4vw] mt-[20px] md:mt-[29px] border-b-[1px] border-b-solid border-b-[#FFC700]" />
    </>
  );
}
