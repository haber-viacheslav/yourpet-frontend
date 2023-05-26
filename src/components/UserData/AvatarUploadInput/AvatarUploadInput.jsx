import { useState } from 'react';
import { useFormikContext } from 'formik';
import { UserPhotoIcon } from '../Icons/Icons';
import { EditPhotoBtn, ConfirmPhotoBtn } from '../../buttons/buttons';
import {
  PhotoWrapper,
  UploadFileLabel,
  UploadFile,
  Photo,
  ErrWrapper,
  PhotoPlaceWrapper,
  Wrapper,
} from './AvatarUploadInput.styled';
import PropTypes from 'prop-types';

export const AvatarUploadInput = ({
  errors,
  touched,
  handleSubmit,
  isEditingBlocked,
  setIsEditingBlocked,
  avatar,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [photoPreview, SetPhotoPreview] = useState(avatar || null);
  const { setFieldValue } = useFormikContext();

  const handleOnEdit = () => {
    setIsEditing(true);
    setIsEditingBlocked(true);
  };

  const handleOnConfirm = () => {
    setIsEditing(false);
    setIsEditingBlocked(false);
    handleSubmit();
  };

  const handleUploadFile = e => {
    const uploadFile = e.currentTarget.files[0];
    setFieldValue('file', uploadFile);
    const preview = uploadFile ? URL.createObjectURL(uploadFile) : null;
    SetPhotoPreview(preview);
  };

  const isFieldInvalid = errors.file && touched.file;

  return (
    <Wrapper>
      <UploadFileLabel>
        <UploadFile
          type="file"
          name="file"
          accept="image/*"
          id="file"
          onChange={handleUploadFile}
          disabled={isEditing ? false : true}
        />
        <PhotoPlaceWrapper>
          <PhotoWrapper data-color={photoPreview}>
            {photoPreview && <Photo src={photoPreview} />}
            {!photoPreview && <UserPhotoIcon />}
          </PhotoWrapper>
          {isFieldInvalid && <ErrWrapper>{errors.file}</ErrWrapper>}
        </PhotoPlaceWrapper>
      </UploadFileLabel>
      {!isEditing && (
        <EditPhotoBtn
          onClick={handleOnEdit}
          isEditingBlocked={isEditingBlocked}
        />
      )}
      {isEditing && (
        <ConfirmPhotoBtn onClick={handleOnConfirm} error={isFieldInvalid} />
      )}
    </Wrapper>
  );
};

AvatarUploadInput.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isEditingBlocked: PropTypes.bool.isRequired,
  setIsEditingBlocked: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};
