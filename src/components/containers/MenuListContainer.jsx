import React, { useEffect, useState } from 'react';
import axios from 'axios';
import searchImg from '../../images/homeBranches/branches-search.svg';
import MenuItemCard from './MenuItemCard';
import AppStoreImg from '../../images/homeDownloadApp/app-store.png';
import PlayStoreImg from '../../images/homeDownloadApp/play-store.png';
import EmptySearch from '../../images/emptyStates/no-platillos.png';
import FilterImg from '../../images/menuCategories/filter.svg';
import MenuFilterMobile from './MenuFilterMobile';

const optionsDishes = {
  method: 'GET',
  url: process.env.REACT_APP_API_DISHES,
  params: { page: '1', limit: '12' },
  headers: { 'Content-Type': 'application/json' },
};

const optionsCategories = {
  method: 'GET',
  url: process.env.REACT_APP_API_CATEGORIES,
  headers: { 'Content-Type': 'application/json' },
};

export default function MenuListContainer() {
  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState([]);
  const [result, setResult] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [actualPage, setActualPage] = useState(1);
  const [pagesButtons, setPagesButtons] = useState([1]);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [actualCategory, setActualCategory] = useState('Todas');

  const handleSearch = (event) => {
    setSearch(event.target.value);
    optionsDishes.params.categories = [];
    setActualCategory('Todas');
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

  const handleCategoryFilter = (category, categoryName) => {
    setSearch('');
    setActualPage(1);
    if (category === 'Todas') {
      setActualCategory('Todas');
      optionsDishes.params.categories = [];
      optionsDishes.params.q = '';
      axios.request(optionsDishes).then((response) => {
        setResult(response.data.data);
        setTotalPages(response.data.meta.last_page);
      }).catch((error) => {
        console.error(error);
      });
    } else {
      setActualCategory(categoryName);
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
    <section className="pt-[25px] px-[16px] md:pt-[30px] lg:pt-[80px] md:px-[44px] xl:px-[60px] bg-[#f8f8f8] max-w-[1500px] mx-auto" id="box">
      <div className="flex justify-center md:flex-col md:items-center xl:flex-row xl:justify-start mb-[40px] md:mb-[90px] xl:mb-[96px]">
        <label htmlFor="search" className="md:mb-[30px] xl:mb-[0px] xl:md-[0px] flex items-center gap-[9px] text-white font-Open-Sans font-normal text-[12px] leading-[16px] w-[295px] md:w-[467px] xl:w-[31vw] border-[1px] border-solid border-[#C4C4C4] px-[18px] rounded-[8px] bg-[#F8F8F8] mr-[20px] md:mr-[0px] xl:mr-[43px] max-w-[467px]">
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
          // Render Category Buttons in Desktop
          categories.length > 0
          && (
            <div className="hidden md:flex md:mr-[-40px] items-center">
              <button type="button" className={`mr-[40px] font-Syne font-bold text-[18px] leading-[22px] hover:text-[#00000050] ${(actualCategory === 'Todas') && 'underline underline-offset-[2px] decoration-[#FFD600] decoration-[6px]'}`} onClick={() => handleCategoryFilter('Todas')}>Todas</button>
              {categories.map((item) => <button key={item.id} type="button" className={`md:whitespace-nowrap mr-[40px] font-Syne font-bold text-[18px] leading-[22px] hover:text-[#00000050] ${(actualCategory === item.name) && 'underline underline-offset-[2px] decoration-[#FFD600] decoration-[6px]'}`} onClick={() => handleCategoryFilter(item.id, item.name)}>{item.name}</button>)}
            </div>
          )
        }
        {
          // Render Category Filter Button in Mobile
          categories.length > 0
          && (
            <button
              type="button"
              onClick={() => setShowMobileFilter(!showMobileFilter)}
            >
              <img src={FilterImg} alt="Filter" className="md:hidden" />
            </button>
          )
        }
      </div>
      {
        // Render Category Buttons in Mobile
        showMobileFilter
        && (
          <MenuFilterMobile
            categories={categories}
            setShowMobileFilter={setShowMobileFilter}
            handleCategoryFilter={handleCategoryFilter}
            actualCategory={actualCategory}
          />
        )
      }
      {/* Render Item Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-[20px] xl:px-[0px]">
        {
          result.length > 0
            ? result.map((item) => <MenuItemCard key={item.id} item={item} />)
            : <img src={EmptySearch} alt="Empty search" />
        }
      </div>

      {
        // Render Pagination Buttons
        result.length > 0
        && (
          <div className="md:mt-[38px] xl:mt-[70px] flex justify-center gap-[10px] flex-wrap">
            {
              pagesButtons.map((item) => <button key={item} type="button" className={`py-[10px] px-[18px] border-solid border-[1px] border-gray rounded-[10px] hover:border-none hover:text-black hover:bg-[#00000025] ${(actualPage === item) && 'bg-black text-[#FFD600]'}`} onClick={() => handlePageChange(item)}>{item}</button>)
            }
            <button type="button" className="bg-[#FFF1BF] py-[10px] px-[18px] rounded-[10px] hover:opacity-50" onClick={() => handlePageChange('next')}>Siguiente</button>
          </div>
        )
      }

      <div className="flex flex-col gap-[18px] md:gap-[0px] md:flex-row items-center justify-between px-[8vw] mb-[20px] md:mb-[50px] mt-[70px]">
        <p className="font-bold text-[24px] leading-[24px] md:mr-[86px] font-Druk-Text-Wide md:self-end text-[#00000080]">Foodies</p>
        <div className="flex gap-[10px]">
          <img src={AppStoreImg} alt="App Store" className="hover:opacity-50 max-w-[116px] max-h-[34px] md:max-w-[133px] md:max-h-[33px] lg:max-w-[184px] lg:max-h-[54px]" />
          <img src={PlayStoreImg} alt="Play Store" className="hover:opacity-50 max-w-[116px] max-h-[34px] md:max-w-[133px] md:max-h-[33px] lg:max-w-[184px] lg:max-h-[54px]" />
        </div>
      </div>
      <hr className="xl:hidden mx-[0px] md:mx-[10px] mt-[20px] md:mt-[29px] border-b-[1px] border-b-solid border-b-[#FFC700]" />
    </section>
  );
}
