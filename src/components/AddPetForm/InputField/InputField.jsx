import { ErrorMessage } from 'formik';
import { InputLabel, Input, ErrWrapper } from './InputField.styled';

export const InputField = ({ type, name, label, placeholder }) => {
  return (
    <InputLabel>
      {label}
      <Input type={type} name={name} placeholder={placeholder} />
      <ErrWrapper>
        <ErrorMessage name={name} />
      </ErrWrapper>
    </InputLabel>
  );
};
