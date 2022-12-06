import React from 'react';
import PropTypes from 'prop-types';
import arrowRight from '../../images/heroImages/arrow-right.svg';

export default function CtaButton(props) {
  const { name } = props;
  return (
    <p className="flex font-Syne font-bold text-[22px] leading-[26px] gap-[12px] items-center">
      {name}
      <img src={arrowRight} alt="Arrow right" />
    </p>
  );
}

CtaButton.propTypes = {
  name: PropTypes.string.isRequired,
};
