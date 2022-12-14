import React, { useState, useRef } from 'react';
import MovingComponent from 'react-moving-text';
import useOnScreen from '../../hooks/useOnScreen';

const AnimationsForChaining = ['slideInFromTop'];

export default function MenuItemCard({ item }) {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const [animationIndex, setAnimationIndex] = useState(0);
  const [animationType, setAnimationType] = useState(AnimationsForChaining[0]);

  const handleChainAnimation = () => {
    setAnimationIndex(animationIndex + 1);
    setAnimationType(animationIndex + 1);
  };

  const {
    title, description, price, image, categories,
  } = item;
  return (
    <article ref={ref} className="mx-auto h-[fit-content] group flex flex-col pb-[9px] mb-[48px] md:mb-[70px] hover:pb-[29px] hover:bg-white rounded-[10px] hover:shadow-lg hover:shadow-[rgba(56, 81, 114, 0.2)]">
      <img src={image} alt={title} className=" h-[264px] rounded-[10px] object-cover mb-[14px] group-hover:h-[287px]" />
      {
        isVisible
        && (
          <MovingComponent
            onAnimationEnd={handleChainAnimation}
            type={animationType}
            duration="2000ms"
            timing="linear"
            fillMode="forwards"
            iteration={1}
            className=""
          >
            <p className="font-Syne font-bold text-[22px] leading-[26px] mb-[20px] ml-[20px]">{title}</p>
            <p className="font-Open-Sans font-normal text-[18px] leading-[25px] mb-[40px] ml-[20px]">{description}</p>
            <div className="flex flex-wrap mx-[20px] justify-between items-center justify-self-end mt-auto">
              {
                categories.length > 0 && <p className="font-Open-Sans font-normal text-[18px] leading-[25px] text-[#78909C]">{categories[0].name}</p>
              }
              <p className="bg-[#FFD600] ml-auto rounded-[8px] px-[10px] py-[6px] font-Druk-Text-Wide font-bold text-[16px] leading-[16px]">
                $
                {price}
                .00
              </p>
            </div>
          </MovingComponent>
        )
      }
    </article>
  );
}
