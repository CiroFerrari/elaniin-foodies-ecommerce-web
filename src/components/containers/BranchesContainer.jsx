import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ElSalvadorMap from '../../images/homeBranches/branches-map.png';
import BranchesButton from '../base/BranchesButton';
import SearchInput from '../../images/homeBranches/branches-search.svg';
import TakeAwayImg from '../../images/homeBranches/branches-takeaway.svg';
import DeliveryImg from '../../images/homeBranches/branches-delivery.svg';

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
  const [takeawayActive, setTakeawayActive] = useState('true');
  const [deliveryActive, setDeliveryActive] = useState('false');
  const [locations, setLocations] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (takeawayActive === 'true') {
      axios.request(optionsTakeout).then((response) => {
        console.log('Takeaway fetch');
        console.log(response.data.data);
        setLocations(response.data.data);
      }).catch((error) => {
        console.error(error);
      });
    } else if (deliveryActive === 'true') {
      axios.request(optionsDelivery).then((response) => {
        console.log('Delivery fetch');
        console.log(response.data.data);
        setLocations(response.data.data);
      }).catch((error) => {
        console.error(error);
      });
    }
  }, [takeawayActive]);

  const takeaway = () => {
    console.log('click takeaway');
    setDeliveryActive('false');
    setTakeawayActive('true');
    setSearch('');
  };

  const delivery = () => {
    console.log('click delivery');
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
        console.log('Takeaway fetch');
        console.log(response.data.data);
        setLocations(response.data.data);
      }).catch((error) => {
        console.error(error);
      });
    } else {
      optionsDelivery.params.q = input;
      optionsTakeout.params.q = '';
      axios.request(optionsDelivery).then((response) => {
        console.log('Takeaway fetch');
        console.log(response.data.data);
        setLocations(response.data.data);
      }).catch((error) => {
        console.error(error);
      });
    }
  };

  return (
    <section className="mt-[80px] mb-[24px] flex">
      <div className="lg:w-[45vw]">
        <h3 className="font-Druk-Text-Wide font-bold text-[40px] leading-[40px] text-center mb-[32px]">Estamos para ti</h3>
        <div className="flex">
          <BranchesButton name="Para llevar" image={TakeAwayImg} active={takeawayActive} onClick={takeaway} />
          <BranchesButton name="Domicilio" image={DeliveryImg} active={deliveryActive} onClick={delivery} />
        </div>
        <div className="border-[1px] border-[#C4C4C4] border-solid p-[12px] flex gap-[30px] pl-[7vw] mb-[15px]">
          <img src={SearchInput} alt="Search" />
          <input type="text" className="flex-1 px-[10px] font-Open-Sans font-normal text-[18px] leading-[24.5px]" placeholder="Buscar nombre o dirección" value={search} onChange={(event) => handleSearch(event.target.value)} />
        </div>
        {
          locations.length > 0
            ? locations.map((item) => (
              <article key={item.id} className="border-[1px] border-black border-solid px-[22px] py-[15px] my-[10px] ml-[7vw] mr-[22px]">
                <h5 className="font-Syne font-bold text-[20px] leading-[24px] mb-[5px]">{item.title}</h5>
                <p className="font-Open-Sans font-normal text-[16px] leading[22px]">{item.description.slice(0, 34)}</p>
                <p className="font-Open-Sans font-normal text-[16px] leading[22px]">{item.description.slice(34)}</p>
              </article>
            ))
            : <p>Sin resultados</p>
        }

      </div>
      <img className="lg:w-[55vw]" src={ElSalvadorMap} alt="El Salvador map" />
    </section>
  );
}
