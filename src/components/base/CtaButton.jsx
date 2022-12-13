import React from 'react';
import PropTypes from 'prop-types';
import arrowRight from '../../images/heroImages/arrow-right.svg';

export default function CtaButton(props) {
  const { name, navigation } = props;
  const navigateTo = () => {
    console.log(navigation);
    const element = document.getElementById(navigation);
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };
  return (
    <button
      onClick={navigateTo}
      type="button"
      className="flex font-Syne font-bold text-[22px] leading-[26px] gap-[12px] items-center"
    >
      {name}
      <img src={arrowRight} alt="Arrow right" />
    </button>
  );
}

CtaButton.propTypes = {
  name: PropTypes.string.isRequired,
};
