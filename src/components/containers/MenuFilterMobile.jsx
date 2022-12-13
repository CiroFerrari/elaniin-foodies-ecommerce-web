import React from 'react';
import CloseFilterImg from '../../images/menuCategories/close-filter.svg';

export default function MenuFilterMobile(props) {
  const { categories, setShowMobileFilter, handleCategoryFilter } = props;
  console.log(categories);
  return (
    <section
      className="relative bg-[#000] rounded-b-[30px] z-100 mt-[-40px] pt-[47px] pl-[17px] pb-[63px] mb-[40px]"
    >
      <p className="text-[#FFD600] font-Druk-Text-Wide font-bold text-[25px] leading-[25px] mb-[53px]">Filtros</p>
      <button
        type="button"
        onClick={() => setShowMobileFilter(false)}
        className="absolute top-[47px] right-[16px]"
      >
        <img src={CloseFilterImg} alt="Cross" className="md:hidden" />
      </button>
      {
          categories.length > 0
          && (
            <div className="flex flex-col gap-[50px]">
              <button type="button" className="text-left text-white font-Syne font-bold text-[25px] leading-[30px]" onClick={() => { handleCategoryFilter('Todas'); setShowMobileFilter(false); }}>Todas</button>
              {categories.map((item) => <button key={item.id} type="button" className="text-left text-white font-Syne font-bold text-[25px] leading-[30px]" onClick={() => { handleCategoryFilter(item.id); setShowMobileFilter(false); }}>{item.name}</button>)}
            </div>
          )
        }
    </section>
  );
}
