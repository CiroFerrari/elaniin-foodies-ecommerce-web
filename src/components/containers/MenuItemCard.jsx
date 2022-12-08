import React from 'react';

export default function MenuItemCard({ item }) {
  const {
    title, description, price, image, categories,
  } = item;
  return (
    <article className="group w-[330px] pb-[9px] hover:pb-[29px] hover:bg-white rounded-[10px]">
      <img src={image} alt="Hamburguesa" className="w-[330px] h-[264px] rounded-[10px] object-cover mb-[14px] group-hover:h-[287px]" />
      <p className="font-Syne font-bold text-[22px] leading-[26px] mb-[20px] ml-[20px]">{title}</p>
      <p className="font-Open-Sans font-normal text-[18px] leading-[25px] mb-[40px] ml-[20px]">{description}</p>
      <div className="flex mx-[20px] justify-between items-center">
        <p className="font-Open-Sans font-normal text-[18px] leading-[25px] text-[#78909C]">{categories[0].name}</p>
        <p className="bg-[#FFD600] rounded-[8px] px-[10px] py-[6px] font-Druk-Text-Wide font-bold text-[16px] leading-[16px]">
          $
          {price}
          .00
        </p>
      </div>
    </article>
  );
}
