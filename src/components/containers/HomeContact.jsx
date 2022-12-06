import React, { useState } from 'react';
import ContactInput from '../base/ContactInput';

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

    alert(email + name);
  };
  return (
    <section className="bg-black py-[112px] z-0 mt-[-60px] flex flex-col justify-center items-center">
      <h3 className="text-center font-Druk-Text-Wide font-bold text-[36px] leading-[36px] text-white mb-[17px]">Cuentanos tu experiencia</h3>
      <p className="text-white text-center font-Open-Sans font-normal text-[24px] leading-[33px] max-w-[46vw] mb-[40px]">
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
              className="w-[40vw] h-[132px] border-[1px] border-solid border-white bg-transparent py-[14px] pl-[20px] font-Open-Sans font-normal text-[16px] leading-[22px] mt-[5px]"
            />
          </label>
        </div>
        <button type="submit" className="bg-[#FFD600] rounded-[4px] py-[14px] px-[20px] self-end font-Open-Sans font-bold text-[16px] leading-[22px]">Enviar comentarios</button>
      </form>
    </section>
  );
}