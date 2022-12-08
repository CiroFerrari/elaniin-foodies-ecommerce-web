import React, { useEffect, useState } from 'react';
import axios from 'axios';
import searchImg from '../../images/homeBranches/branches-search.svg';
import MenuItemCard from './MenuItemCard';
import AppStoreImg from '../../images/homeDownloadApp/app-store.png';
import PlayStoreImg from '../../images/homeDownloadApp/play-store.png';

const options = {
  method: 'GET',
  url: 'https://api.foodies.elaniin.dev/dishes',
  params: { page: '1', limit: '3' },
  headers: { 'Content-Type': 'application/json' },
};

const itemExample = {
  id: 'd473886b-cf9b-429f-bb57-92177ca00ab3',
  title: 'La imposible',
  description: '1/2 Libra de carne envuelta en tocíno, con cebolla morada, queso cheddar, especias. ',
  price: 91,
  image: 'https://cdn.elaniin.com/trainee-program/projects/foodies/assets/images/la-imposible.jpg',
  categories: [
    {
      id: '91d14059-8225-466c-b765-3d9f8527ae29',
      name: 'Las tradicionales',
      slug: 'las-tradicionales',
    },
  ],
};

export default function MenuListContainer() {
  const [search, setSearch] = useState('');
  const result = [1];
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    axios.request(options).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.error(error);
    });
  });
  return (
    <section className="pt-[80px] px-[60px] bg-[#f8f8f8]">
      <div className="flex mb-[96px]">
        <label htmlFor="search" className="flex items-center gap-[9px] text-white font-Open-Sans font-normal text-[12px] leading-[16px] w-[31vw] border-[1px] border-solid border-[#C4C4C4] px-[18px] rounded-[8px] bg-[#F8F8F8] mr-[43px]">
          <img src={searchImg} alt="Search" />
          <input
            id="search"
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Busca tu platillo favorito..."
            className="bg-transparent py-[13px] pl-[20px] font-Open-Sans font-normal text-[18px] leading-[25px] flex-1 text-[#00000040]"
          />
        </label>
        <button type="button" className="mr-[40px] font-Syne font-bold text-[18px] leading-[22px]">Todas</button>
        <button type="button" className="mr-[40px] font-Syne font-bold text-[18px] leading-[22px]">Las tradicionales</button>
        <button type="button" className="mr-[40px] font-Syne font-bold text-[18px] leading-[22px]">Recomendaciones</button>
        <button type="button" className="mr-[40px] font-Syne font-bold text-[18px] leading-[22px]">Para compartir</button>
      </div>
      {
        result.length > 0
          ? result.map((index) => <MenuItemCard key={index} item={itemExample} />)
          : <p>Sin resultados</p>
      }
      <div className="mt-[70px] flex justify-center gap-[10px]">
        <span className="py-[10px] px-[18px] border-solid border-[1px] border-gray rounded-[10px]">1</span>
        <span className="py-[10px] px-[18px] border-solid border-[1px] border-gray rounded-[10px]">2</span>
        <span className="py-[10px] px-[18px] border-solid border-[1px] border-gray rounded-[10px]">3</span>
        <span className="py-[10px] px-[18px] border-solid border-[1px] border-gray rounded-[10px]">4</span>
        <span className="py-[10px] px-[18px] border-solid border-[1px] border-gray rounded-[10px]">Siguiente</span>
      </div>
      <div className="flex items-center justify-between px-[8vw] mb-[50px]">
        <p className="font-bold text-[24px] leading-[24px] mr-[86px] font-Druk-Text-Wide self-end text-[#00000080]">Foodies</p>
        <div className="flex gap-[10px]">
          <img src={AppStoreImg} alt="App Store" className="max-w-[184px] max-h-[54px]" />
          <img src={PlayStoreImg} alt="Play Store" className="max-w-[184px] max-h-[54px]" />
        </div>
      </div>
    </section>
  );
}
