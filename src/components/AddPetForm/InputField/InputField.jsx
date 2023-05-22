import { ErrorMessage } from 'formik';
import { InputLabel, Input, ErrWrapper } from './InputField.styled';
import PropTypes from 'prop-types';

export const InputField = ({
  type,
  name,
  label,
  placeholder,
  errors,
  touched,
}) => {
  const isFieldInvalid =
    errors.hasOwnProperty(name) &&
    // touched.hasOwnProperty(name) &&
    !touched[name];
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

InputField.propTypes = {
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
