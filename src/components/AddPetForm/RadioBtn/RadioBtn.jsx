import { RadioInput, InputLabel } from './RadioBtn.styled';

export const RadioBtn = ({ value, selected, name, children }) => {
  return (
    <InputLabel selected={selected} name={name}>
      {children}
      {value}
      <RadioInput type="radio" name={name} value={value} />
    </InputLabel>
  );
};
