import { useState } from 'react';
import {
  ProfileInputLabel,
  ProfileInput,
  SingleInputWrapper,
  ErrWrapper,
} from './UserDataItem.styled';
import { InputEditBtn, InputCheckBtn } from '../../buttons/buttons';
import PropTypes from 'prop-types';

export const UserDataItem = ({
  type,
  name,
  placeholder,
  isEditingBlocked,
  setIsEditingBlocked,
  handleSubmit,
  errors,
  touched,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleOnEdit = () => {
    setIsEditing(true);
    setIsEditingBlocked(true);
  };

  const handleOnCheck = () => {
    setIsEditing(false);
    setIsEditingBlocked(false);
    handleSubmit();
  };

  const label = `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
  const isFieldInvalid = errors[name] && touched[name];
  return (
    <ProfileInputLabel>
      {label}:
      <SingleInputWrapper>
        <ProfileInput
          type={type}
          name={name}
          placeholder={isEditing ? `${placeholder}` : ''}
          disabled={isEditing ? false : true}
        />
        {isEditing && (
          <InputCheckBtn onClick={handleOnCheck} error={isFieldInvalid} />
        )}

        {!isEditing && (
          <InputEditBtn
            onClick={handleOnEdit}
            isEditingBlocked={isEditingBlocked}
          />
        )}
        {isFieldInvalid && <ErrWrapper>{errors[name]}</ErrWrapper>}
      </SingleInputWrapper>
    </ProfileInputLabel>
  );
};

UserDataItem.propTypes = {
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,

  handleSubmit: PropTypes.func.isRequired,
  isEditingBlocked: PropTypes.bool.isRequired,
  setIsEditingBlocked: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
