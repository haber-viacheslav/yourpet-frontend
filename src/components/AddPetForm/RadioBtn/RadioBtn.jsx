import { RadioInput, InputLabel } from './RadioBtn.styled';

export const RadioBtn = ({ value, picked, name, children }) => {
  const selected = value === picked;
  return (
    <InputLabel selected={selected} name={name}>
      {children}
      {value}
      <RadioInput type="radio" name={name} value={value} />
    </InputLabel>
  );
};
