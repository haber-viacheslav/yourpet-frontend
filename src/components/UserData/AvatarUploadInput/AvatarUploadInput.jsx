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
  onEditClick,
  onFormSubmit,
  isEditingBlocked,
  avatar,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [photoPreview, SetPhotoPreview] = useState(avatar || null);
  const { setFieldValue } = useFormikContext();

  const handleOnEdit = () => {
    setIsEditing(true);
    onEditClick('photo');
  };

  const handleOnConfirm = () => {
    setIsEditing(false);
    onEditClick('refresh');
    onFormSubmit();
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
          disabled={isEditingBlocked.photo ? false : true}
        />
        <PhotoPlaceWrapper>
          <PhotoWrapper data-color={photoPreview}>
            {photoPreview && <Photo src={photoPreview} />}
            {!photoPreview && <UserPhotoIcon />}
          </PhotoWrapper>
          {isFieldInvalid && <ErrWrapper>{errors.file}</ErrWrapper>}
        </PhotoPlaceWrapper>
      </UploadFileLabel>
      {isEditing && isEditingBlocked.photo && (
        <ConfirmPhotoBtn onClick={handleOnConfirm} error={isFieldInvalid} />
      )}
      {!isEditingBlocked.photo && <EditPhotoBtn onClick={handleOnEdit} />}
    </Wrapper>
  );
};

AvatarUploadInput.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  isEditingBlocked: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
  onEditClick: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  avatar: PropTypes.string,
};
