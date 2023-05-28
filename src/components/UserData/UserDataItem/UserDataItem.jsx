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
  onEditClick,
  onFormSubmit,
  errors,
  touched,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleOnEdit = () => {
    setIsEditing(true);
    onEditClick(name);
  };

  const handleOnCheck = () => {
    setIsEditing(false);
    onEditClick('refresh');
    onFormSubmit();
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
          placeholder={isEditingBlocked[name] ? `${placeholder}` : ''}
          disabled={isEditingBlocked[name] ? false : true}
        />
        {isEditing && isEditingBlocked[name] && (
          <InputCheckBtn onClick={handleOnCheck} error={isFieldInvalid} />
        )}

        {!isEditingBlocked[name] && <InputEditBtn onClick={handleOnEdit} />}
        {isFieldInvalid && <ErrWrapper>{errors[name]}</ErrWrapper>}
      </SingleInputWrapper>
    </ProfileInputLabel>
  );
};

UserDataItem.propTypes = {
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  onEditClick: PropTypes.func.isRequired,
  isEditingBlocked: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
