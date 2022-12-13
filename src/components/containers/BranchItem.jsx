import React from 'react';

export default function BranchItem(props) {
  const {
    id, title, description, selected, setLocationSelected,
  } = props;
  return (
    <button
      type="button"
      onClick={() => setLocationSelected(id)}
      className={`flex flex-col items-start border-[1px] border-black border-solid rounded-[4px] px-[12px] md:px-[22px] py-[15px] mt-[10px] md:my-[10px] ml-[16px] md:ml-[7vw] mr-[16px] md:mr-[22px] ${(selected === id) && 'bg-[#FFF1BF] border-none'}`}
    >
      <h5 className="font-Syne font-bold text-[18px] leading-[22px] md:text-[20px] md:leading-[24px] mb-[5px]">{title}</h5>
      <p className="font-Open-Sans font-normal text-[14px] leading[19px] md:text-[16px] md:leading[22px]">{description.slice(0, 34)}</p>
      <p className="text-left font-Open-Sans font-normal text-[14px] leading[19px] md:text-[16px] md:leading[22px]">{description.slice(34)}</p>
    </button>
  );
}
