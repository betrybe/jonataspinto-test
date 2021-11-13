import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ id, label, type, direction, align, ...restProps }) => (
  <label
    htmlFor={ id }
    className={ `d-flex gap-2 text-nowrap flex-${direction} align-items-${align}` }
  >
    {label}
    <input id={ id } type={ type } { ...restProps } />
  </label>
);

Input.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  direction: PropTypes.string,
  align: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  type: 'text',
  direction: 'row',
  align: 'center',
};

export default Input;
