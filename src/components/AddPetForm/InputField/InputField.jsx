import { ErrorMessage } from 'formik';
import { InputLabel, Input, ErrWrapper } from './InputField.styled';

export const InputField = ({
  type,
  name,
  label,
  placeholder,
  errors,
  touched,
}) => {
  const isFieldInvalid =
    errors.hasOwnProperty(name) && touched.hasOwnProperty(name);
  return (
    <InputLabel>
      {label}
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        data-invalid={isFieldInvalid}
      />
      <ErrWrapper>
        <ErrorMessage name={name} />
      </ErrWrapper>
    </InputLabel>
  );
};
