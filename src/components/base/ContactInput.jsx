import React from 'react';
import PropTypes from 'prop-types';

export default function ContactInput(props) {
  const {
    description, id, handle, placeholder, value,
  } = props;
  if (!description || !id || !handle || !placeholder || value === undefined) {
    return null;
  }
  return (
    <label data-testid="ContactInput-test" htmlFor={`${id}`} className="flex flex-col text-white font-Open-Sans font-normal text-[12px] leading-[16px]">
      {description}
      <input
        required
        id={id}
        type="text"
        value={value}
        onChange={handle}
        placeholder={placeholder}
        className="w-[343px] rounded-[4px] md:w-[634px] xl:w-[300px] border-[1px] border-solid border-white bg-black py-[13px] pl-[20px] font-Open-Sans font-normal text-[16px] leading-[22px] mt-[5px]"
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
