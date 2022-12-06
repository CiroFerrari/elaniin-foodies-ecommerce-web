import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ElSalvadorMap from '../../images/homeBranches/branches-map.png';
import BranchesButton from '../base/BranchesButton';
import SearchInput from '../../images/homeBranches/branches-search.svg';
import TakeAwayImg from '../../images/homeBranches/branches-takeaway.svg';
import DeliveryImg from '../../images/homeBranches/branches-delivery.svg';

const options = {
  method: 'GET',
  url: 'https://api.foodies.elaniin.dev/locations',
  params: { page: '1', limit: '3', type: 'takeout' },
  headers: { 'Content-Type': 'application/json' },
};

export default function BranchesContainer() {
  const [locations, setLocations] = useState([
    {
      id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
      title: 'Sucursal San Benito',
      description: 'Abierto de 12:00 m.d. - 9:00 p.m. Calle la Reforma #543, Colonia San Benito',
      url: 'https://g.page/Elaniin',
      type: 'delivery',
    },
  ]);

  useEffect(() => {
    axios.request(options).then((response) => {
      console.log(response);
      setLocations(response.data);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <div className="mt-[80px] mb-[24px] flex">
      <section className="lg:w-[45vw]">
        <h3 className="font-Druk-Text-Wide font-bold text-[40px] leading-[40px] text-center mb-[32px]">Estamos para ti</h3>
        <div className="flex">
          <BranchesButton name="Para llevar" image={TakeAwayImg} />
          <BranchesButton name="Domicilio" image={DeliveryImg} />
        </div>
        <div className="border-[1px] border-[#C4C4C4] border-solid p-[12px] flex gap-[30px] pl-[7vw] mb-[15px]">
          <img src={SearchInput} alt="Search" />
          <input type="text" className="flex-1 px-[10px] font-Open-Sans font-normal text-[18px] leading-[24.5px]" placeholder="Buscar nombre o dirección" />
        </div>
        <article className="border-[1px] border-black border-solid px-[22px] py-[15px] my-[10px] ml-[7vw] mr-[22px]">
          <h5 className="font-Syne font-bold text-[20px] leading-[24px] mb-[5px]">{locations[0].title}</h5>
          <p className="font-Open-Sans font-normal text-[16px] leading[22px]">{locations[0].description.slice(0, 34)}</p>
          <p className="font-Open-Sans font-normal text-[16px] leading[22px]">{locations[0].description.slice(34)}</p>
        </article>
      </section>
      <img className="lg:w-[55vw]" src={ElSalvadorMap} alt="El Salvador map" />
    </div>
  );
}
