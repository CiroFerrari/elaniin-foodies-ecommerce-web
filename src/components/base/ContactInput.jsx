import React from 'react';
import PropTypes from 'prop-types';

export default function ContactInput(props) {
  const {
    description, id, handle, placeholder, value,
  } = props;
  return (
    <label htmlFor={`${id}`} className="flex flex-col text-white font-Open-Sans font-normal text-[12px] leading-[16px]">
      {description}
      <input
        id={id}
        type="text"
        value={value}
        onChange={handle}
        placeholder={placeholder}
        className="border-[1px] border-solid border-white bg-black py-[13px] pl-[20px] font-Open-Sans font-normal text-[16px] leading-[22px] mt-[5px]"
      />
    </label>
  );
}

ContactInput.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
