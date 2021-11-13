import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ id, label, options, direction, align, ...restProps }) => (
  <label
    htmlFor={ id }
    className={ `d-flex gap-2 text-nowrap flex-${direction} align-items-${align}` }
  >
    {label}
    <select id={ id } { ...restProps }>
      {options.length > 0 && (
        options.map((option, index) => (
          <option
            key={ option.value }
            name={ option.value }
            defaultValue={ index === 0 }
          >
            {option.label}
          </option>
        ))
      )}
    </select>
  </label>
);

Select.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.node,
      label: PropTypes.node,
    }),
  ),
  direction: PropTypes.string,
  align: PropTypes.string,
};

Select.defaultProps = {
  label: '',
  options: [],
  direction: 'row',
  align: 'center',
};

export default Select;
