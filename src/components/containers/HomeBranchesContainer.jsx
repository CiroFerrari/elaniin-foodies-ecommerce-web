import React, { useEffect, useState, useRef } from 'react';
import MovingComponent from 'react-moving-text';
import axios from 'axios';
import useOnScreen from '../../hooks/useOnScreen';
import ElSalvadorMap from '../../images/homeBranches/branches-map.webp';
import BranchesButton from '../base/BranchesButton';
import SearchInput from '../../images/homeBranches/branches-search.svg';
import TakeAwayImg from '../../images/homeBranches/branches-takeaway.svg';
import DeliveryImg from '../../images/homeBranches/branches-delivery.svg';
import EmptySearch from '../../images/emptyStates/error-search.png';
import BranchItem from './BranchItem';

const AnimationsForChaining = ['slideInFromTop'];

const optionsTakeout = {
  method: 'GET',
  url: 'https://api.foodies.elaniin.dev/locations',
  params: { page: '1', limit: '3', type: 'takeout' },
  headers: { 'Content-Type': 'application/json' },
};

const optionsDelivery = {
  method: 'GET',
  url: 'https://api.foodies.elaniin.dev/locations',
  params: { page: '1', limit: '3', type: 'delivery' },
  headers: { 'Content-Type': 'application/json' },
};

export default function BranchesContainer() {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const [animationIndex, setAnimationIndex] = useState(0);
  const [animationType, setAnimationType] = useState(AnimationsForChaining[0]);

  const handleChainAnimation = () => {
    setAnimationIndex(animationIndex + 1);
    setAnimationType(animationIndex + 1);
  };

  const [takeawayActive, setTakeawayActive] = useState('true');
  const [deliveryActive, setDeliveryActive] = useState('false');
  const [locations, setLocations] = useState([]);
  const [search, setSearch] = useState('');
  const [locationSelected, setLocationSelected] = useState('');

  useEffect(() => {
    if (takeawayActive === 'true') {
      axios.request(optionsTakeout).then((response) => {
        setLocations(response.data.data);
        setLocationSelected(response.data.data[0].id);
      }).catch((error) => {
        console.error(error);
      });
    } else if (deliveryActive === 'true') {
      axios.request(optionsDelivery).then((response) => {
        setLocations(response.data.data);
        setLocationSelected(response.data.data[0].id);
      }).catch((error) => {
        console.error(error);
      });
    }
  }, [takeawayActive]);

  const takeaway = () => {
    setDeliveryActive('false');
    setTakeawayActive('true');
    setSearch('');
  };

  const delivery = () => {
    setDeliveryActive('true');
    setTakeawayActive('false');
    setSearch('');
  };

  const handleSearch = (input) => {
    setSearch(input);
    if (input === '') {
      setSearch('');
      optionsTakeout.params.q = '';
      optionsDelivery.params.q = '';
    }
    if (takeawayActive === 'true') {
      optionsTakeout.params.q = input;
      optionsDelivery.params.q = '';
      axios.request(optionsTakeout).then((response) => {
        setLocations(response.data.data);
        setLocationSelected(response.data.data[0].id);
      }).catch((error) => {
        console.error(error);
      });
    } else {
      optionsDelivery.params.q = input;
      optionsTakeout.params.q = '';
      axios.request(optionsDelivery).then((response) => {
        setLocations(response.data.data);
        setLocationSelected(response.data.data[0].id);
      }).catch((error) => {
        console.error(error);
      });
    }
  };

  useEffect(() => {
  }, [locationSelected]);

  return (
    <section id="branchesContainer" className="mt-[27px] md:mt-[80px] xl:mb-[24px] flex md:flex-col xl:flex-row max-w-[1500px] mx-auto">
      <div ref={ref} className="w-full xl:w-[45vw] sm:mx-auto flex flex-col">
        {
          isVisible
          && (
            <MovingComponent
              onAnimationEnd={handleChainAnimation}
              type={animationType}
              duration="1000ms"
              timing="linear"
              fillMode="forwards"
              iteration={1}
              className="flex flex-col"
            >
              <h3 className="max-w-[295px] mb-[30px] md:max-w-none pl-[16px] text-[35px] leading-[35px] md:pl-[0px] font-Druk-Text-Wide font-bold md:text-[40px] md:leading-[40px] md:text-left md:ml-[53px] xl:text-center xl:ml-[0px] md:mb-[32px]">Estamos para ti</h3>
              <div className="flex">
                <BranchesButton name="Para llevar" image={TakeAwayImg} active={takeawayActive} onClick={takeaway} />
                <BranchesButton name="Domicilio" image={DeliveryImg} active={deliveryActive} onClick={delivery} />
              </div>
              <div className="border-[1px] border-[#C4C4C4] border-solid pl:[19px] md:pb-[16px] p-[12px] flex gap-[15px] md:gap-[30px] md:pl-[7vw] mb-[5px] md:mb-[15px]">
                <img src={SearchInput} alt="Search" className="h-[16px] md:h-[25px]" />
                <input type="text" className="bg-[#f8f8f8] flex-1 px-[10px] font-Open-Sans font-normal text-[16px] leading-[22px] md:text-[18px] md:leading-[24.5px]" placeholder="Buscar nombre o dirección" value={search} onChange={(event) => handleSearch(event.target.value)} />
              </div>
              {
                locations.length > 0
                  ? locations.map((item) => (
                    <BranchItem
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      description={item.description}
                      selected={locationSelected}
                      setLocationSelected={setLocationSelected}
                    />
                  ))
                  : (
                    <div className="grow flex flex-col justify-center items-center">
                      <img src={EmptySearch} alt="Empty search" className="max-w-[215px]" />
                      <p className="font-Syne font-bold text-[20px] leading-[24px] max-w-[303px] text-center mt-[23px]">¡No hemos encontrado lo que buscas!</p>
                    </div>
                  )
              }
            </MovingComponent>
          )
        }
      </div>
      <img className="hidden md:block xl:w-[55vw] xl:max-w-[824px] md:mt-[30px] xl:mt-[0px]" src={ElSalvadorMap} alt="El Salvador map" />
    </section>
  );
}
