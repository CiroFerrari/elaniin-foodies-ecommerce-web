import React, { useEffect, useState } from 'react';
import axios from 'axios';
import searchImg from '../../images/homeBranches/branches-search.svg';
import MenuItemCard from './MenuItemCard';
import AppStoreImg from '../../images/homeDownloadApp/app-store.png';
import PlayStoreImg from '../../images/homeDownloadApp/play-store.png';

const optionsDishes = {
  method: 'GET',
  url: 'https://api.foodies.elaniin.dev/dishes',
  params: { page: '1', limit: '12' },
  headers: { 'Content-Type': 'application/json' },
};

const optionsCategories = {
  method: 'GET',
  url: 'https://api.foodies.elaniin.dev/categories',
  headers: { 'Content-Type': 'application/json' },
};

export default function MenuListContainer() {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  const [categories, setCategories] = useState([]);
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    axios.request(optionsCategories).then((response) => {
      console.log(response.data.data);
      setCategories(response.data.data);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  useEffect(() => {
    axios.request(optionsDishes).then((response) => {
      console.log(response.data.data);
      setResult(response.data.data);
    }).catch((error) => {
      console.error(error);
    });
  }, [search]);
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
        {
          categories.length > 0
          && (
          <div className="flex items-center">
            <button type="button" className="mr-[40px] font-Syne font-bold text-[18px] leading-[22px]">Todas</button>
            {categories.map((item) => <button key={item.id} type="button" className="mr-[40px] font-Syne font-bold text-[18px] leading-[22px]">{item.name}</button>)}
          </div>
          )
        }
      </div>
      <div className="flex flex-wrap gap-[20px] px-[59px] justify-center">
        {
          result.length > 0
            ? result.map((item) => <MenuItemCard key={item.id} item={item} />)
            : <p>Sin resultados</p>
        }
      </div>

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
