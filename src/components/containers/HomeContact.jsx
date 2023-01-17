import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactInput from '../base/ContactInput';
import HomeContactOk from './HomeContactOk';
import useFetchData from '../../hooks/useFetchData';

const baseURL = process.env.REACT_APP_API_STRAPI;
const fetchURL = '/api/home-contacts/1?populate=*';

const options = {
  method: 'POST',
  url: process.env.REACT_APP_API_FORMS_CONTACT_SUBMISSIONS,
  headers: { 'Content-Type': 'application/json' },
  data: {
    name: 'John Doe',
    email: 'john@doe.com',
    message: 'Hey there! I wanted to invite you to our trainee program! Let\'s have a call!',
  },
};

export default function HomeContact2() {
  // CMS Upgrade
  const [content, setContent] = useState(null);
  const { result } = useFetchData(`${baseURL + fetchURL}`);

  useEffect(() => {
    if (result) {
      setContent(result.data.attributes);
    }
  }, [result]);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [confirmation, setConfirmation] = useState(0);

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
      setName('');
      setEmail('');
      setMessage('');
      setConfirmation(response.status);
    }).catch((error) => {
      console.error(error);
    });
  };
  return (
    (confirmation === 201)
      ? (
        <HomeContactOk />
      ) : (
        <section id="homeContact" className="bg-black pt-[73px] md:pt-[112px] md:pb-[365px] xl:pb-[112px] z-0 md:mt-[-60px] flex flex-col justify-center items-center pb-[358px]">
          {
            content
            && (
              <div className="flex flex-col justify-center items-center max-w-[1500px] mx-auto px-[16px]">
                <h3 className="text-center font-Druk-Text-Wide font-bold text-[35px] leading-[35px] md:text-[36px] md:leading-[36px] text-white mb-[20px] md:mb-[17px]">{content.title}</h3>
                <p className="mx-auto text-white text-center font-Open-Sans font-normal text-[18px] leading-[24px] md:text-[24px] md:leading-[33px] md:w-[554px] xl:w-[47vw] xl:max-w-[698px] mb-[39px] md:mb-[40px]">
                  {content.subtitle}
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-[40px] md:gap-[23px]">
                  <div className="flex flex-col xl:flex-row gap-[10px] xl:gap-[50px]">
                    <div className="flex flex-col gap-[10px]">
                      <ContactInput
                        description={content.inputOneTitle}
                        id="name"
                        value={name}
                        handle={handleName}
                        placeholder={content.inputOnePlaceholder}
                      />
                      <ContactInput
                        description={content.inputTwoTitle}
                        id="email"
                        value={email}
                        handle={handleEmail}
                        placeholder={content.inputTwoPlaceholder}
                      />
                    </div>
                    <label htmlFor="message" className="flex flex-col text-white font-Open-Sans font-normal text-[12px] leading-[16px]">
                      {content.textareaTitle}
                      <textarea
                        required
                        id="message"
                        type="text"
                        value={message}
                        onChange={handleMessage}
                        placeholder={content.textareaPlaceholder}
                        className="rounded-[4px] md:w-[634px] xl:w-[40vw] xl:max-w-[594px] h-[132px] border-[1px] border-solid border-white bg-transparent py-[14px] pl-[20px] font-Open-Sans font-normal text-[16px] leading-[22px] mt-[5px]"
                      />
                    </label>
                  </div>
                  <button type="submit" className="bg-[#FFD600] ml-[55px] md:ml-[0px] md:self-center w-[220px] md:mt-[34px] rounded-[4px] py-[14px] px-[20px] xl:self-end font-Open-Sans font-bold text-[16px] leading-[22px] xl:w-[196px] hover:bg-[#FFD60095]">{content.buttonText}</button>
                </form>
              </div>
            )
          }
        </section>
      )
  );
}
