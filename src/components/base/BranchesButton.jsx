import React from 'react';
import PropTypes from 'prop-types';

export default function BranchesButton(props) {
  const { name, image } = props;
  return (
    <button type="button" className="font-Syne font-bold text-[25px] leading-[30px] flex-1 flex justify-center items-center border-[1px] border-[#C4C4C4] border-solid p-[17px]">
      <img src={image} alt="Button img" className="mr-[25px]" />
      {name}
    </button>
  );
}

BranchesButton.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
