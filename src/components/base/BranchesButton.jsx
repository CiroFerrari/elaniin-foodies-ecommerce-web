import React from 'react';
import PropTypes from 'prop-types';

const activeClass = {
  backgroundColor: 'black',
  color: 'white',
};

const toggleClass1 = {
  filter: 'invert(1)',
};

export default function BranchesButton(props) {
  const {
    name, image, active, onClick,
  } = props;
  if (!name || !image || !active || !onClick) {
    return null;
  }
  let backgroundClass;
  if (active === 'true') {
    backgroundClass = activeClass;
  }
  let toggle;
  if ((active === 'true' && name === 'Domicilio') || (active === 'false' && name === 'Para llevar')) {
    toggle = toggleClass1;
  }
  return (
    <button data-testid="BranchesButton-test" type="button" className="text-[16px] leading-[19px] font-Syne font-bold md:text-[25px] md:leading-[30px] flex-1 flex justify-center items-center border-[1px] border-[#C4C4C4] border-solid p-[17px] hover:text-[#00000050]" style={backgroundClass} onClick={onClick}>
      <img src={image} alt="Button img" className="h-[18px] md:h-[25px] mr-[10px] md:mr-[25px]" style={toggle} />
      {name}
    </button>
  );
}

BranchesButton.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
};
