import { RadioInput, InputLabel } from './RadioBtn.styled';
import PropTypes from 'prop-types';

export const RadioBtn = ({ value, selected, name, children }) => {
  return (
    <InputLabel selected={selected} name={name}>
      {children}
      {value}
      <RadioInput type="radio" name={name} value={value} />
    </InputLabel>
  );
};

RadioBtn.propTypes = {
  children: PropTypes.node,
  selected: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
