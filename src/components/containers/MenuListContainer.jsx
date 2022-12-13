import React, { useEffect, useState } from 'react';
import axios from 'axios';
import searchImg from '../../images/homeBranches/branches-search.svg';
import MenuItemCard from './MenuItemCard';
import AppStoreImg from '../../images/homeDownloadApp/app-store.png';
import PlayStoreImg from '../../images/homeDownloadApp/play-store.png';
import EmptySearch from '../../images/emptyStates/no-platillos.png';
import FilterImg from '../../images/menuCategories/filter.svg';

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
  const [categories, setCategories] = useState([]);
  const [result, setResult] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [actualPage, setActualPage] = useState(1);
  const [pagesButtons, setPagesButtons] = useState([1]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    optionsDishes.params.categories = [];
    if (event.target.value === '') {
      optionsDishes.params.q = '';
      axios.request(optionsDishes).then((response) => {
        setResult(response.data.data);
        setTotalPages(response.data.meta.last_page);
      }).catch((error) => {
        console.error(error);
      });
    } else {
      optionsDishes.params.q = event.target.value;
      axios.request(optionsDishes).then((response) => {
        setResult(response.data.data);
        setTotalPages(response.data.meta.last_page);
      }).catch((error) => {
        console.error(error);
      });
    }
  };

  const handleCategoryFilter = (category) => {
    setSearch('');
    if (category === 'Todas') {
      console.log('Todas');
      optionsDishes.params.categories = [];
      optionsDishes.params.q = '';
      axios.request(optionsDishes).then((response) => {
        setResult(response.data.data);
        setTotalPages(response.data.meta.last_page);
      }).catch((error) => {
        console.error(error);
      });
    } else {
      console.log(category);
      optionsDishes.params.categories = [category];
      optionsDishes.params.q = '';
      axios.request(optionsDishes).then((response) => {
        setResult(response.data.data);
        setTotalPages(response.data.meta.last_page);
      }).catch((error) => {
        console.error(error);
      });
    }
  };

  // Fetch Categories - Only the first time
  useEffect(() => {
    axios.request(optionsCategories).then((response) => {
      setCategories(response.data.data);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  // Fetch Dishes - Dynamic Pages
  useEffect(() => {
    optionsDishes.params.page = actualPage;
    axios.request(optionsDishes).then((response) => {
      setResult(response.data.data);
      setTotalPages(response.data.meta.last_page);
    }).catch((error) => {
      console.error(error);
    });
  }, [actualPage]);

  // Dynamic Pagination Buttons
  useEffect(() => {
    const tempArray = [];
    for (let i = 1; i <= totalPages; i += 1) {
      tempArray.push(i);
    }
    setPagesButtons(tempArray);
  }, [totalPages]);

  // Change Page
  const handlePageChange = (pageClicked) => {
    console.log(pageClicked);
    if (pageClicked === 'next' && actualPage < totalPages) {
      setActualPage(actualPage + 1);
    } else if (pageClicked === 'next' && actualPage === totalPages) {
      setActualPage(actualPage);
    } else {
      setActualPage(pageClicked);
    }
    const element = document.getElementById('box');
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  return (
    <section className="pt-[25px] px-[16px] md:pt-[80px] md:px-[60px] bg-[#f8f8f8] max-w-[1500px] mx-auto" id="box">
      <div className="flex justify-center md:justify-start mb-[40px] md:mb-[96px]">
        <label htmlFor="search" className="flex items-center gap-[9px] text-white font-Open-Sans font-normal text-[12px] leading-[16px] w-[295px] md:w-[31vw] border-[1px] border-solid border-[#C4C4C4] px-[18px] rounded-[8px] bg-[#F8F8F8] mr-[20px] md:mr-[43px] max-w-[467px]">
          <img src={searchImg} alt="Search" />
          <input
            id="search"
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Busca tu platillo favorito..."
            className="bg-transparent py-[13px] pl-[6px] md:pl-[20px] font-Open-Sans font-normal text-[16px] leading-[22px] md:text-[18px] md:leading-[25px] flex-1 text-[#00000040]"
          />
        </label>
        {
          categories.length > 0
          && (
            <div className="hidden md:flex items-center">
              <button type="button" className="mr-[40px] font-Syne font-bold text-[18px] leading-[22px]" onClick={() => handleCategoryFilter('Todas')}>Todas</button>
              {categories.map((item) => <button key={item.id} type="button" className="mr-[40px] font-Syne font-bold text-[18px] leading-[22px]" onClick={() => handleCategoryFilter(item.id)}>{item.name}</button>)}
            </div>
          )
        }
        {
          categories.length > 0
          && (
            <img src={FilterImg} alt="Filter" className="md:hidden" />
          )
        }
      </div>
      <div className="flex flex-wrap gap-[20px] md:px-[59px] justify-center">
        {
          result.length > 0
            ? result.map((item) => <MenuItemCard key={item.id} item={item} />)
            : <img src={EmptySearch} alt="Empty search" />
        }
      </div>

      {
        result.length > 0
        && (
          <div className="mt-[58px] md:mt-[70px] flex justify-center gap-[10px] flex-wrap">
            {
              pagesButtons.map((item) => <button key={item} type="button" className="py-[10px] px-[18px] border-solid border-[1px] border-gray rounded-[10px]" onClick={() => handlePageChange(item)}>{item}</button>)
            }
            <button type="button" className="py-[10px] px-[18px] border-solid border-[1px] border-gray rounded-[10px]" onClick={() => handlePageChange('next')}>Siguiente</button>
          </div>
        )
      }

      <div className="flex flex-col gap-[18px] md:gap-[0px] md:flex-row items-center justify-between px-[8vw] mb-[20px] md:mb-[50px] mt-[70px]">
        <p className="font-bold text-[24px] leading-[24px] md:mr-[86px] font-Druk-Text-Wide md:self-end text-[#00000080]">Foodies</p>
        <div className="flex gap-[10px]">
          <img src={AppStoreImg} alt="App Store" className="max-w-[116px] max-h-[34px] md:max-w-[184px] md:max-h-[54px]" />
          <img src={PlayStoreImg} alt="Play Store" className="max-w-[116px] max-h-[34px] md:max-w-[184px] md:max-h-[54px]" />
        </div>
      </div>
      <hr className="md:hidden mx-[4vw] mt-[20px] md:mt-[29px] border-b-[1px] border-b-solid border-b-[#FFC700]" />
    </section>
  );
}
