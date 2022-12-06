import React from 'react';
import DownloadAppImg from '../../images/homeDownloadApp/app-image.png';
import AppStoreImg from '../../images/homeDownloadApp/app-store.png';
import PlayStoreImg from '../../images/homeDownloadApp/play-store.png';

export default function DownloadApp() {
  return (
    <>
      <section className="flex mt-[-112px]">
        <img src={DownloadAppImg} alt="Foodies App" className="w-[66vw] z-0" />
        <article className="pt-[200px] ml-[-26vw] gap-[50px] flex flex-col items-center">
          <h3 className="font-Druk-Text-Wide font-bold text-[35px] leading-[35px] text-center mb-[57px]">
            Obten mas beneficios
            <span className="bg-[#FFD600] block p-[11px] pl-[5px] z-0 mt-[-11px]">Descarga nuestra App</span>
          </h3>
          <div className="flex gap-[50px]">
            <div className="flex flex-col max-w-[320px] items-center">
              <p className="text-center w-[46px] h-[46px] bg-[#FFD600] rounded-full flex justify-center items-center text-[18px] text-white font-bold mb-[18px] font-Roboto">01</p>
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
          <div className="flex flex-col max-w-[320px] items-center">
            <p className="text-center w-[46px] h-[46px] bg-[#FFD600] rounded-full flex justify-center items-center text-[18px] text-white font-bold mb-[18px] font-Roboto">03</p>
            <p className="text-center font-Roboto font-bold text-[22px] leading-[26px] mb-[20px]">Promociones especiales</p>
            <p className="text-center font-Roboto font-normal text-[18px] leading-[21px]">
              Curabitur in eleifend turpis, id vehicula odio.
              Donec pulvinar tellus eget magna aliquet ultricies.
            </p>
          </div>
        </article>
      </section>
      <div className="flex items-center justify-between px-[8vw] mt-[-112px]">
        <p className="font-bold text-[24px] leading-[24px] mr-[86px] font-Druk-Text-Wide self-end text-[#00000080]">Foodies</p>
        <div className="flex gap-[10px]">
          <img src={AppStoreImg} alt="App Store" className="max-w-[184px] max-h-[54px]" />
          <img src={PlayStoreImg} alt="Play Store" className="max-w-[184px] max-h-[54px]" />
        </div>
      </div>
    </>
  );
}
