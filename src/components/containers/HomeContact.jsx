import React, { useState } from 'react';
import axios from 'axios';
import ContactInput from '../base/ContactInput';

const options = {
  method: 'POST',
  url: 'https://api.foodies.elaniin.dev/forms/contact/submissions',
  headers: { 'Content-Type': 'application/json' },
  data: {
    name: 'John Doe',
    email: 'john@doe.com',
    message: 'Hey there! I wanted to invite you to our trainee program! Let\'s have a call!',
  },
};

export default function HomeContact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    options.data = {
      name,
      email,
      message,
    };
    axios.request(options).then((response) => {
      alert(response.data.message);
      setName('');
      setEmail('');
      setMessage('');
    }).catch((error) => {
      console.error(error);
    });
  };
  return (
    <section className="bg-black py-[112px] z-0 mt-[-60px] flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center max-w-[1500px] mx-auto">
        <h3 className="text-center font-Druk-Text-Wide font-bold text-[36px] leading-[36px] text-white mb-[17px]">Cuentanos tu experiencia</h3>
        <p className="text-white text-center font-Open-Sans font-normal text-[24px] leading-[33px] w-[46vw] max-w-[698px] mb-[40px]">
          Don&apos;t miss out on our great offers & Receive deals from all our
          top restaurants via e-mail.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-[23px]">
          <div className="flex gap-[50px]">
            <div className="flex flex-col gap-[10px]">
              <ContactInput
                description="Nombre y Apellido"
                id="name"
                value={name}
                handle={handleName}
                placeholder="John Doe"
              />
              <ContactInput
                description="Correo electrónico"
                id="email"
                value={email}
                handle={handleEmail}
                placeholder="j.doe@correo.com"
              />
            </div>
            <label htmlFor="message" className="flex flex-col text-white font-Open-Sans font-normal text-[12px] leading-[16px]">
              Correo electrónico
              <textarea
                id="message"
                type="text"
                value={message}
                onChange={handleMessage}
                placeholder="El día de ahora mi experiencia fue..."
                className="w-[40vw] max-w-[594px] h-[132px] border-[1px] border-solid border-white bg-transparent py-[14px] pl-[20px] font-Open-Sans font-normal text-[16px] leading-[22px] mt-[5px]"
              />
            </label>
          </div>
          <button type="submit" className="bg-[#FFD600] rounded-[4px] py-[14px] px-[20px] self-end font-Open-Sans font-bold text-[16px] leading-[22px]">Enviar comentarios</button>
        </form>
      </div>
    </section>
  );
}
